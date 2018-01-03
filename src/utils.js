import { API_BASE_URL, API_KEY } from './contants'

export const buildUrl = (endpoint) => {
  if (endpoint === 'popular') {
    return `${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  }
  if (endpoint === 'rated') {
    return `${API_BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  }
  if (endpoint === 'search') {
    return `${API_BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  }
}