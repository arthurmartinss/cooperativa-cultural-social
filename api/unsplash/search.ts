import { handleUnsplashSearch } from '../../src/server/unsplashSearch.js'

export function GET(request: Request) {
  return handleUnsplashSearch(request, process.env.UNSPLASH_ACCESS_KEY)
}
