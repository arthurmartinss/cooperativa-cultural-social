const UNSPLASH_API = 'https://api.unsplash.com'

const orientations = new Set(['landscape', 'portrait', 'squarish'])
const colors = new Set([
  'black_and_white', 'black', 'white', 'yellow', 'orange', 'red', 'purple',
  'magenta', 'green', 'teal', 'blue',
])

type UnsplashPhoto = {
  id: string
  width: number
  height: number
  color: string | null
  alt_description: string | null
  description: string | null
  urls: { raw: string; regular: string; small: string }
  links: { html: string; download_location: string }
  user: { name: string; links: { html: string } }
}

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': status === 200
        ? 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600'
        : 'no-store',
      ...headers,
    },
  })
}

export async function handleUnsplashSearch(request: Request, accessKey?: string) {
  if (request.method !== 'GET') {
    return json({ error: 'Método não permitido.' }, 405, { Allow: 'GET' })
  }

  if (!accessKey) {
    return json({ error: 'A busca precisa da chave local do Unsplash.' }, 503)
  }

  const params = new URL(request.url).searchParams
  const query = (params.get('query') ?? '').trim().slice(0, 120)
  if (query.length < 2) return json({ error: 'Digite pelo menos 2 caracteres.' }, 400)

  const orientation = params.get('orientation') ?? ''
  const color = params.get('color') ?? ''
  const perPage = Math.min(30, Math.max(1, Math.floor(Number(params.get('per_page')) || 12)))
  const page = Math.min(100, Math.max(1, Math.floor(Number(params.get('page')) || 1)))

  if (orientation && !orientations.has(orientation)) {
    return json({ error: 'Orientação de imagem inválida.' }, 400)
  }
  if (color && !colors.has(color)) return json({ error: 'Cor inválida.' }, 400)

  const upstreamUrl = new URL('/search/photos', UNSPLASH_API)
  upstreamUrl.searchParams.set('query', query)
  upstreamUrl.searchParams.set('per_page', String(perPage))
  upstreamUrl.searchParams.set('page', String(page))
  upstreamUrl.searchParams.set('content_filter', 'high')
  if (orientation) upstreamUrl.searchParams.set('orientation', orientation)
  if (color) upstreamUrl.searchParams.set('color', color)

  try {
    const upstream = await fetch(upstreamUrl, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        'Accept-Version': 'v1',
      },
      signal: AbortSignal.timeout(8_000),
    })

    if (!upstream.ok) {
      const remaining = upstream.headers.get('x-ratelimit-remaining')
      const upstreamError = await upstream.text()
      let errorMessage = ''
      try {
        const errorBody = JSON.parse(upstreamError) as { errors?: unknown }
        errorMessage = Array.isArray(errorBody.errors) ? errorBody.errors.join(' ') : ''
      } catch {
        // Keep upstream error details out of the client response.
      }
      const rateLimited = upstream.status === 429 || (
        upstream.status === 403 && (
          remaining === '0' || /rate.?limit|quota|too many requests/i.test(errorMessage)
        )
      )
      const status = rateLimited ? 429 : 502
      const message = rateLimited
        ? 'A cota de buscas do Unsplash foi atingida. Aguarde a renovação do limite e tente novamente.'
        : upstream.status === 403
          ? 'O Unsplash recusou o acesso à busca. Confira se a aplicação está ativa e se a Access Key configurada pertence a ela.'
          : upstream.status === 401
            ? 'A Access Key do Unsplash foi recusada. Confira a chave configurada no ambiente local.'
            : 'Não foi possível buscar fotografias agora. Tente novamente mais tarde.'
      return json({
        error: message,
      }, status, {
        ...(upstream.headers.get('x-ratelimit-limit')
          ? { 'X-Unsplash-RateLimit-Limit': upstream.headers.get('x-ratelimit-limit')! }
          : {}),
        ...(remaining
          ? { 'X-Unsplash-RateLimit-Remaining': remaining }
          : {}),
      })
    }

    const result = await upstream.json() as {
      total: number
      total_pages: number
      results: UnsplashPhoto[]
    }

    return json({
      total: result.total,
      totalPages: result.total_pages,
      photos: result.results.map((photo) => ({
        id: photo.id,
        width: photo.width,
        height: photo.height,
        color: photo.color,
        altDescription: photo.alt_description,
        description: photo.description,
        urls: photo.urls,
        links: photo.links,
        user: photo.user,
      })),
    }, 200, {
      ...(upstream.headers.get('x-ratelimit-limit')
        ? { 'X-Unsplash-RateLimit-Limit': upstream.headers.get('x-ratelimit-limit')! }
        : {}),
      ...(upstream.headers.get('x-ratelimit-remaining')
        ? { 'X-Unsplash-RateLimit-Remaining': upstream.headers.get('x-ratelimit-remaining')! }
        : {}),
    })
  } catch {
    return json({ error: 'A busca demorou mais que o esperado. Tente novamente.' }, 504)
  }
}

export async function handleUnsplashDownload(request: Request, accessKey?: string) {
  if (request.method !== 'POST') {
    return json({ error: 'Método não permitido.' }, 405, { Allow: 'POST' })
  }
  if (!accessKey) return json({ error: 'A chave local do Unsplash ainda não foi configurada.' }, 503)

  try {
    const { photoId, downloadLocation } = await request.json() as {
      photoId?: string
      downloadLocation?: string
    }
    if (!photoId || !/^[A-Za-z0-9_-]{1,100}$/.test(photoId)) {
      return json({ error: 'Identificador de fotografia inválido.' }, 400)
    }

    // Validate the API-provided endpoint to prevent this proxy from becoming an open URL fetcher.
    const approvedLocation = new URL(`https://api.unsplash.com/photos/${encodeURIComponent(photoId)}/download`)
    if (downloadLocation) {
      const suppliedLocation = new URL(downloadLocation)
      if (
        suppliedLocation.origin !== UNSPLASH_API ||
        suppliedLocation.pathname !== approvedLocation.pathname
      ) return json({ error: 'Referência de download inválida.' }, 400)
      approvedLocation.search = suppliedLocation.search
    }

    const upstream = await fetch(approvedLocation, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        'Accept-Version': 'v1',
      },
      signal: AbortSignal.timeout(8_000),
    })
    if (!upstream.ok) {
      return json({ error: 'Não foi possível registrar a seleção no Unsplash.' }, upstream.status === 429 ? 429 : 502)
    }
    await upstream.arrayBuffer()
    return json({ tracked: true })
  } catch {
    return json({ error: 'Não foi possível registrar a seleção no Unsplash.' }, 502)
  }
}
