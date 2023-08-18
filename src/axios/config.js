const devBsseUrl = 'http://api.k780.com/'
const proBaseUrl = ''

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBsseUrl : proBaseUrl
console.log(process.env)

export const TIMEOUT = 5000