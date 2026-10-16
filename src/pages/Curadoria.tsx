import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { FiArrowLeft, FiArrowRight, FiCheck, FiDownload, FiExternalLink, FiHeart, FiMaximize2, FiSearch, FiStar, FiX } from 'react-icons/fi'
import PropostasComposicao from '../components/PropostasComposicao/PropostasComposicao'
import './Curadoria.css'

type Photo = {
  id: string
  width: number
  height: number
  color: string | null
  altDescription: string | null
  description: string | null
  urls: { raw: string; regular: string; small: string }
  links: { html: string; download_location: string }
  user: { name: string; links: { html: string } }
}

type Selection = { photo: Photo; section: string }
type SavedState = { favorites: Photo[]; selections: Selection[] }
type Category = { label: string; query: string; description: string }
type SearchResponse = { photos?: Photo[]; total?: number; totalPages?: number; error?: string }
type CachedSearch = { result: SearchResponse; fetchedAt: number; remaining: number | null }

const STORAGE_KEY = 'ccs-curadoria-unsplash-v1'
const SEARCH_CACHE_TTL = 10 * 60 * 1000
const SEARCH_CACHE_STALE_TTL = 24 * 60 * 60 * 1000
const searchCache = new Map<string, CachedSearch>()
const categories: Category[] = [
  { label: 'Cultura', query: 'Brazilian cultural festival community audience', description: 'Rodas, celebrações, tradições e encontros culturais' },
  { label: 'Arte', query: 'Brazilian artist painting community art workshop', description: 'Expressão artística, criação coletiva e processos' },
  { label: 'Esporte', query: 'community sports project youth Brazil', description: 'Movimento, jogo e participação em grupo' },
  { label: 'Tecnologia', query: 'young people digital technology workshop', description: 'Pessoas aprendendo, criando e compartilhando tecnologia' },
  { label: 'Comunicação', query: 'community media production photography interview', description: 'Gente contando histórias e construindo narrativas' },
  { label: 'Projetos sociais', query: 'community collaboration social project diverse people', description: 'Colaboração real, inclusão e vida em comunidade' },
]

const sections = [
  'Página inicial', 'Eventos e resultados', 'Sobre a CCS', 'Marketing',
  'Recursos Humanos', 'Tecnologia da Informação', 'Esporte', 'Artes', 'Turismo',
]

const orientationOptions = [
  { value: '', label: 'Qualquer formato' },
  { value: 'landscape', label: 'Horizontal' },
  { value: 'portrait', label: 'Vertical' },
  { value: 'squarish', label: 'Quadrado' },
]

const colorOptions = [
  { value: '', label: 'Qualquer cor' },
  { value: 'blue', label: 'Azul' },
  { value: 'yellow', label: 'Amarelo' },
  { value: 'black_and_white', label: 'Preto e branco' },
  { value: 'green', label: 'Verde' },
  { value: 'red', label: 'Vermelho' },
]

function readSavedState(): SavedState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return { favorites: [], selections: [] }
    const parsed = JSON.parse(stored) as Partial<SavedState>
    return {
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      selections: Array.isArray(parsed.selections) ? parsed.selections : [],
    }
  } catch {
    return { favorites: [], selections: [] }
  }
}

function imageUrl(photo: Photo, width: number, height?: number) {
  const url = new URL(photo.urls.raw)
  url.searchParams.set('w', String(Math.min(width, photo.width)))
  if (height) url.searchParams.set('h', String(Math.min(height, photo.height)))
  url.searchParams.set('q', '82')
  url.searchParams.set('auto', 'format')
  url.searchParams.set('fit', 'crop')
  url.searchParams.set('crop', 'entropy')
  return url.toString()
}

function imageSrcSet(photo: Photo) {
  return [400, 700, 1000, 1400]
    .filter((width) => width <= photo.width)
    .map((width) => `${imageUrl(photo, width)} ${width}w`)
    .join(', ')
}

function hasGoodResolution(photo: Photo) {
  return Math.max(photo.width, photo.height) >= 1600 && Math.min(photo.width, photo.height) >= 900
}

function creditUrl(photo: Photo) {
  const url = new URL(photo.user.links.html)
  url.searchParams.set('utm_source', 'cooperativa_cultural_social')
  url.searchParams.set('utm_medium', 'referral')
  return url.toString()
}

function unsplashUrl(photo: Photo) {
  const url = new URL(photo.links.html)
  url.searchParams.set('utm_source', 'cooperativa_cultural_social')
  url.searchParams.set('utm_medium', 'referral')
  return url.toString()
}

export default function Curadoria() {
  const [saved, setSaved] = useState<SavedState>(readSavedState)
  const [category, setCategory] = useState(categories[0])
  const [query, setQuery] = useState('')
  const [activeQuery, setActiveQuery] = useState(categories[0].query)
  const [orientation, setOrientation] = useState('landscape')
  const [color, setColor] = useState('')
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [total, setTotal] = useState(0)
  const [remainingRequests, setRemainingRequests] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showFavorites, setShowFavorites] = useState(false)
  const [targetSection, setTargetSection] = useState(sections[0])
  const [preview, setPreview] = useState<Photo | null>(null)
  const [compareOpen, setCompareOpen] = useState(false)
  const [savingPhoto, setSavingPhoto] = useState('')
  const [notice, setNotice] = useState('')
  const [selectionError, setSelectionError] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
    } catch {
      // Keep the gallery usable if this browser blocks local storage.
    }
  }, [saved])

  useEffect(() => {
    if (showFavorites) return
    const controller = new AbortController()
    const loadPhotos = async () => {
      setLoading(true)
      setError('')
      setNotice('')
      const params = new URLSearchParams({ query: activeQuery, page: String(page), per_page: '12' })
      if (orientation) params.set('orientation', orientation)
      if (color) params.set('color', color)
      const cacheKey = params.toString()
      const cached = searchCache.get(cacheKey)
      if (cached && Date.now() - cached.fetchedAt < SEARCH_CACHE_TTL) {
        setPhotos(cached.result.photos ?? [])
        setTotal(cached.result.total ?? 0)
        setTotalPages(cached.result.totalPages ?? 0)
        setRemainingRequests(cached.remaining)
        setNotice('Resultados recentes reaproveitados para economizar consultas da API.')
        setLoading(false)
        return () => controller.abort()
      }
      try {
        const response = await fetch(`/api/unsplash/search?${params}`, { signal: controller.signal })
        const result = await response.json() as SearchResponse
        const remainingHeader = response.headers.get('X-Unsplash-RateLimit-Remaining')
        const remaining = remainingHeader === null ? null : Number(remainingHeader)
        if (!response.ok) {
          if (response.status === 429) setRemainingRequests(0)
          if (response.status === 429 && cached && Date.now() - cached.fetchedAt < SEARCH_CACHE_STALE_TTL) {
            setPhotos(cached.result.photos ?? [])
            setTotal(cached.result.total ?? 0)
            setTotalPages(cached.result.totalPages ?? 0)
            setNotice('A cota da API foi atingida. Exibindo resultados salvos desta busca para você continuar a curadoria.')
            return
          }
          throw new Error(result.error || 'Não foi possível carregar fotografias.')
        }
        searchCache.set(cacheKey, { result, fetchedAt: Date.now(), remaining: Number.isFinite(remaining) ? remaining : null })
        setPhotos(result.photos ?? [])
        setTotal(result.total ?? 0)
        setTotalPages(result.totalPages ?? 0)
        setRemainingRequests(Number.isFinite(remaining) ? remaining : null)
      } catch (requestError) {
        if (requestError instanceof DOMException && requestError.name === 'AbortError') return
        setPhotos([])
        setError(requestError instanceof Error ? requestError.message : 'Não foi possível carregar fotografias.')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }
    if (activeQuery.trim().length >= 2) void loadPhotos()
    return () => controller.abort()
  }, [activeQuery, page, orientation, color, showFavorites])

  const visiblePhotos = showFavorites ? saved.favorites : photos
  const selectedIds = useMemo(() => new Set(saved.selections.map(({ photo }) => photo.id)), [saved.selections])
  const favoriteIds = useMemo(() => new Set(saved.favorites.map((photo) => photo.id)), [saved.favorites])

  function chooseCategory(nextCategory: Category) {
    setCategory(nextCategory)
    setQuery('')
    setActiveQuery(nextCategory.query)
    setPage(1)
    setShowFavorites(false)
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (query.trim().length < 2) return
    setPage(1)
    setCategory({ label: 'Busca livre', query: query.trim(), description: 'Resultados para sua pesquisa.' })
    setActiveQuery(query.trim())
    setShowFavorites(false)
  }

  function toggleFavorite(photo: Photo) {
    setSaved((current) => ({
      ...current,
      favorites: current.favorites.some((favorite) => favorite.id === photo.id)
        ? current.favorites.filter((favorite) => favorite.id !== photo.id)
        : [photo, ...current.favorites],
    }))
  }

  async function selectForSection(photo: Photo) {
    if (!hasGoodResolution(photo)) return
    setSavingPhoto(photo.id)
    setNotice('')
    setSelectionError('')
    try {
      const response = await fetch('/api/unsplash/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photoId: photo.id, downloadLocation: photo.links.download_location }),
      })
      const result = await response.json() as { error?: string }
      if (!response.ok) throw new Error(result.error || 'Não foi possível registrar a escolha.')
      setSaved((current) => ({
        ...current,
        selections: [
          { photo, section: targetSection },
          ...current.selections.filter(({ photo: selected }) => selected.id !== photo.id),
        ],
      }))
      setNotice(`Foto associada a “${targetSection}”. A seleção fica salva neste navegador.`)
    } catch (requestError) {
      setSelectionError(requestError instanceof Error ? requestError.message : 'Não foi possível registrar a escolha.')
    } finally {
      setSavingPhoto('')
    }
  }

  function changeSelectionSection(photoId: string, section: string) {
    setSaved((current) => ({
      ...current,
      selections: current.selections.map((selection) => selection.photo.id === photoId ? { ...selection, section } : selection),
    }))
  }

  function removeSelection(photoId: string) {
    setSaved((current) => ({ ...current, selections: current.selections.filter(({ photo }) => photo.id !== photoId) }))
  }

  function exportSelections() {
    const exportData = {
      project: 'CCS — Cooperativa Cultural Social',
      source: 'Unsplash',
      exportedAt: new Date().toISOString(),
      selections: saved.selections.map(({ photo, section }) => ({
        section,
        photoId: photo.id,
        description: photo.altDescription || photo.description,
        dimensions: { width: photo.width, height: photo.height },
        imageUrl: photo.urls.regular,
        rawImageUrl: photo.urls.raw,
        photoPage: unsplashUrl(photo),
        photographer: {
          name: photo.user.name,
          profileUrl: creditUrl(photo),
        },
      })),
    }
    const file = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'ccs-curadoria-selecoes.json'
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1_000)
  }

  return (
    <main className="curation-page">
      <section className="curation-intro">
        <div className="curation-wrap">
          <p className="curation-eyebrow"><span /> Laboratório de imagem CCS</p>
          <div className="curation-title-row">
            <div>
              <h1>Uma imagem também<br /><em>conta quem somos</em></h1>
              <p className="curation-lede">Vamos encontrar fotografias com presença, afeto e vida real para contar as histórias da cooperativa. Primeiro escolhemos juntos; depois pensamos onde cada imagem funciona melhor.</p>
            </div>
            <aside className="curation-note">
              <span className="curation-note-number">01 / 05</span>
              <p>Curadoria antes da vitrine</p>
              <span>Nenhuma foto daqui altera o site público.</span>
            </aside>
          </div>
          <div className="curation-direction">
            <span className="curation-direction-mark" aria-hidden="true">✳</span>
            <div><strong>O que estamos procurando</strong><p>Gente criando, participando e se encontrando. Cenas espontâneas, diversidade sem pose e detalhes que mostrem a cultura acontecendo.</p></div>
            <span className="curation-direction-side">CCS · imagem em construção</span>
          </div>
        </div>
      </section>

      <section className="curation-main curation-wrap" aria-label="Pesquisa e seleção de imagens">
        <div className="curation-section-heading">
          <div><span className="curation-kicker">PESQUISA VISUAL</span><h2>Escolha um caminho para começar</h2></div>
          <button className={`curation-favorites-toggle ${showFavorites ? 'is-active' : ''}`} onClick={() => { setError(''); setLoading(false); setShowFavorites((shown) => !shown) }} type="button">
            <FiHeart aria-hidden="true" /> Favoritas <span>{saved.favorites.length}</span>
          </button>
        </div>

        <div className="curation-category-list" role="group" aria-label="Categorias de fotografia">
          {categories.map((item, index) => (
            <button className={`curation-category ${category.label === item.label && !showFavorites ? 'is-active' : ''}`} key={item.label} onClick={() => chooseCategory(item)} type="button">
              <span className="curation-category-index">0{index + 1}</span><span>{item.label}</span><FiArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="curation-workbench">
          <div className="curation-workbench-heading">
            <div><span className="curation-kicker">{showFavorites ? 'SEU ACERVO' : 'BUSCA DO MOMENTO'}</span><h2>{showFavorites ? 'Suas imagens favoritas' : category.label}</h2><p>{showFavorites ? 'Salvas neste navegador enquanto você pesquisa.' : category.description}</p></div>
            <div className="curation-selection-count"><FiCheck aria-hidden="true" /><strong>{saved.selections.length}</strong><span>para o projeto</span></div>
          </div>

          <form className="curation-search" onSubmit={submitSearch}>
            <FiSearch aria-hidden="true" />
            <label className="sr-only" htmlFor="curation-query">Pesquisar fotografias</label>
            <input id="curation-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Experimente: oficina de arte com jovens" />
            <button type="submit">Pesquisar</button>
          </form>

          <div className="curation-filters">
            <label>Formato<select value={orientation} onChange={(event) => { setOrientation(event.target.value); setPage(1) }} disabled={showFavorites}>{orientationOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
            <label>Cor predominante<select value={color} onChange={(event) => { setColor(event.target.value); setPage(1) }} disabled={showFavorites}>{colorOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
            <label className="curation-destination">Destino da próxima seleção<select value={targetSection} onChange={(event) => setTargetSection(event.target.value)}>{sections.map((section) => <option key={section}>{section}</option>)}</select></label>
            {!showFavorites && <span className="curation-result-count">{total.toLocaleString('pt-BR')} resultados</span>}
            {!showFavorites && remainingRequests !== null && <span className="curation-api-quota" aria-live="polite">{remainingRequests} consultas restantes</span>}
          </div>

          {notice && <p className="curation-notice" role="status"><FiCheck aria-hidden="true" />{notice}</p>}
          {selectionError && <p className="curation-selection-error" role="alert">{selectionError}</p>}
          {error && <div className="curation-error" role="alert"><strong>Não conseguimos carregar a busca.</strong><p>{error}</p>{error.includes('chave') && <p>Adicione sua chave em <code>my-app/.env.local</code> usando <code>UNSPLASH_ACCESS_KEY=...</code>, reinicie o servidor local e tente novamente. Não envie essa chave pelo chat nem use o prefixo VITE_.</p>}</div>}

          {!error && loading && <div className="curation-loading" aria-live="polite"><span className="curation-loader" />Buscando imagens reais no Unsplash…</div>}
          {!error && !loading && visiblePhotos.length === 0 && <div className="curation-empty"><span aria-hidden="true">✳</span><h3>{showFavorites ? 'Suas favoritas vão aparecer aqui' : 'Ainda não encontramos imagens para esta busca'}</h3><p>{showFavorites ? 'Toque no coração de uma foto que você queira guardar.' : 'Tente outro termo ou altere os filtros de formato e cor.'}</p></div>}

          {!loading && visiblePhotos.length > 0 && (
            <div className="curation-photo-grid">
              {visiblePhotos.map((photo, index) => {
                const isFavorite = favoriteIds.has(photo.id)
                const isSelected = selectedIds.has(photo.id)
                const quality = hasGoodResolution(photo)
                return (
                  <article className={`curation-photo-card curation-photo-card-${index % 5} ${isSelected ? 'is-selected' : ''}`} key={photo.id}>
                    <div className="curation-photo-frame">
                      <img
                        src={imageUrl(photo, 700, 520)}
                        srcSet={imageSrcSet(photo) || undefined}
                        sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        width={photo.width}
                        height={photo.height}
                        alt={photo.altDescription || photo.description || 'Fotografia do Unsplash'}
                        loading="lazy"
                        onError={(event) => { event.currentTarget.classList.add('is-unavailable') }}
                      />
                      <div className="curation-photo-overlay">
                        <button className="curation-icon-button" type="button" onClick={() => setPreview(photo)} aria-label="Ampliar fotografia"><FiMaximize2 /></button>
                        <button className={`curation-icon-button ${isFavorite ? 'is-favorite' : ''}`} type="button" onClick={() => toggleFavorite(photo)} aria-label={isFavorite ? 'Remover das favoritas' : 'Adicionar às favoritas'}><FiHeart fill={isFavorite ? 'currentColor' : 'none'} /></button>
                      </div>
                      {!quality && <span className="curation-quality-warning">Resolução pequena</span>}
                    </div>
                    <div className="curation-photo-meta">
                      <p className="curation-photo-description">{photo.altDescription || photo.description || 'Uma cena para contar uma história da CCS.'}</p>
                      <p className="curation-photo-dimensions">{photo.width} × {photo.height} px {quality ? '· boa resolução' : '· não indicada para destaque'}</p>
                      <div className="curation-photo-credit">Foto de <a href={creditUrl(photo)} target="_blank" rel="noreferrer">{photo.user.name}</a><span>no</span><a href={unsplashUrl(photo)} target="_blank" rel="noreferrer">Unsplash <FiExternalLink aria-hidden="true" /></a></div>
                      {isSelected ? (
                        <div className="curation-card-selection"><span><FiCheck aria-hidden="true" /> Selecionada</span><button type="button" onClick={() => removeSelection(photo.id)}>Desfazer</button></div>
                      ) : (
                        <button className="curation-use-button" type="button" onClick={() => void selectForSection(photo)} disabled={!quality || savingPhoto === photo.id}>
                          {savingPhoto === photo.id ? 'Registrando…' : `Selecionar para ${targetSection}`}<FiArrowRight aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          {!showFavorites && !error && totalPages > 1 && (
            <nav className="curation-pagination" aria-label="Páginas de resultados">
              <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page <= 1 || loading}><FiArrowLeft /> Anterior</button>
              <span>Página <strong>{page}</strong> de {totalPages}</span>
              <button type="button" onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page >= totalPages || loading}>Próxima <FiArrowRight /></button>
            </nav>
          )}
        </div>
      </section>

      <section className="curation-shortlist">
        <div className="curation-wrap">
          <div className="curation-shortlist-head"><div><span className="curation-kicker">ESCOLHAS DA EQUIPE</span><h2>O que já conversa com a CCS</h2><p>As escolhas ficam guardadas neste navegador e podem ser associadas a um destino.</p></div><div className="curation-shortlist-actions"><button type="button" onClick={() => setCompareOpen(true)} disabled={saved.selections.length < 2}>Comparar {saved.selections.length > 0 ? `(${saved.selections.length})` : ''}</button><button className="curation-export-button" type="button" onClick={exportSelections} disabled={saved.selections.length === 0}><FiDownload aria-hidden="true" /> Baixar lista</button></div></div>
          {saved.selections.length === 0 ? <p className="curation-shortlist-empty">Quando uma foto for selecionada para uso, ela aparece aqui.</p> : (
            <div className="curation-selected-list">
              {saved.selections.map(({ photo, section }) => (
                <article className="curation-selected-item" key={photo.id}>
                  <img src={imageUrl(photo, 260, 200)} width="130" height="100" alt={photo.altDescription || 'Fotografia selecionada'} loading="lazy" />
                  <div className="curation-selected-copy"><strong>{photo.altDescription || photo.description || `Foto de ${photo.user.name}`}</strong><span>Foto de <a href={creditUrl(photo)} target="_blank" rel="noreferrer">{photo.user.name}</a> no <a href={unsplashUrl(photo)} target="_blank" rel="noreferrer">Unsplash</a></span><label>Onde pode entrar<select value={section} onChange={(event) => changeSelectionSection(photo.id, event.target.value)}>{sections.map((item) => <option key={item}>{item}</option>)}</select></label></div>
                  <button className="curation-remove-selected" type="button" onClick={() => removeSelection(photo.id)} aria-label="Remover seleção"><FiX /></button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <PropostasComposicao />

      <footer className="curation-footer"><div className="curation-wrap"><FiStar aria-hidden="true" /><p>Escolher a imagem certa também é contar a história da CCS com cuidado.</p><span>UNSPLASH · CCS</span></div></footer>

      {preview && <div className="curation-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setPreview(null) }}><section className="curation-preview-modal" role="dialog" aria-modal="true" aria-label="Visualização ampliada da fotografia"><button className="curation-modal-close" type="button" onClick={() => setPreview(null)} aria-label="Fechar"><FiX /></button><img src={imageUrl(preview, 1800)} width={preview.width} height={preview.height} alt={preview.altDescription || preview.description || 'Fotografia do Unsplash'} /><div><p>{preview.altDescription || preview.description || 'Fotografia selecionada para avaliação.'}</p><span>{preview.width} × {preview.height} px · Foto de <a href={creditUrl(preview)} target="_blank" rel="noreferrer">{preview.user.name}</a> no <a href={unsplashUrl(preview)} target="_blank" rel="noreferrer">Unsplash <FiExternalLink /></a></span></div></section></div>}

      {compareOpen && <div className="curation-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCompareOpen(false) }}><section className="curation-compare-modal" role="dialog" aria-modal="true" aria-label="Comparar fotografias selecionadas"><div className="curation-compare-heading"><div><span className="curation-kicker">LADO A LADO</span><h2>Compare suas escolhas</h2></div><button className="curation-modal-close" type="button" onClick={() => setCompareOpen(false)} aria-label="Fechar comparação"><FiX /></button></div><div className="curation-compare-grid">{saved.selections.map(({ photo, section }) => <article key={photo.id}><img src={imageUrl(photo, 1000, 720)} width={photo.width} height={photo.height} alt={photo.altDescription || 'Fotografia selecionada'} /><p>{photo.width} × {photo.height} px</p><strong>{photo.altDescription || photo.description || 'Sem descrição da imagem'}</strong><span>Foto de <a href={creditUrl(photo)} target="_blank" rel="noreferrer">{photo.user.name}</a></span><span>Destino: {section}</span></article>)}</div></section></div>}
    </main>
  )
}
