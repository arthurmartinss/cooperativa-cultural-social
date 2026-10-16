import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { handleUnsplashDownload, handleUnsplashSearch } from './src/server/unsplashSearch.js'

function unsplashDevApi(accessKey?: string): Plugin {
  return {
    name: 'ccs-unsplash-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = new URL(req.url ?? '/', 'http://localhost').pathname
        const handler = pathname === '/api/unsplash/search'
          ? handleUnsplashSearch
          : pathname === '/api/unsplash/download'
            ? handleUnsplashDownload
            : undefined
        if (!handler) return next()

        try {
          const request = new Request(`http://${req.headers.host ?? 'localhost'}${req.url ?? '/'}`, {
            method: req.method ?? 'GET',
            ...(req.method === 'POST' ? { body: await readRequestBody(req) } : {}),
          })
          const response = await handler(request, accessKey)
          res.statusCode = response.status
          response.headers.forEach((value, key) => res.setHeader(key, value))
          res.end(await response.text())
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

async function readRequestBody(request: import('node:http').IncomingMessage) {
  const chunks: Uint8Array[] = []
  for await (const chunk of request) {
    chunks.push(typeof chunk === 'string' ? new TextEncoder().encode(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const serverEnv = loadEnv(mode, process.cwd(), 'UNSPLASH_')
  return {
    plugins: [react(), tailwindcss(), unsplashDevApi(serverEnv.UNSPLASH_ACCESS_KEY ?? process.env.UNSPLASH_ACCESS_KEY)],
  }
})
