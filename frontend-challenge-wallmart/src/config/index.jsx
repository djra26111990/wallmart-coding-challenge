export default {
    fetchUrl: () => import.meta.env.VITE_URL_BACKEND || process.env.VITE_URL_BACKEND,
    url_prefix: () => import.meta.env.VITE_HTTP_PREFIX || process.env.VITE_HTTP_PREFIX
}