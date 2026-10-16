import { handleUnsplashDownload } from '../../src/server/unsplashSearch.js'

export function POST(request: Request) {
  return handleUnsplashDownload(request, process.env.UNSPLASH_ACCESS_KEY)
}
