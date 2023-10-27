import axios from 'axios'

const apiNayoo = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_NAYOO
})

// Request interceptor
apiNayoo.interceptors.request.use(
  (config: any) => {
    // Modify the request config here (add headers, authentication tokens)
    const token: any = (typeof window !== 'undefined') ? localStorage.getItem('token') : '{}'
    const accessToken: any = JSON.parse(token !== null ? token : '{}')

    // If token is present add it to request's Authorization Header
    if (accessToken !== null) {
      if (config.headers !== null) config.headers.token = accessToken
    }
    return config
  },
  async (error) => {
    // Handle request errors here

    return await Promise.reject(error)
  }
)
// End of Request interceptor

// Response interceptor
apiNayoo.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response
  },
  async (error) => {
    // Handle response errors here

    return await Promise.reject(error)
  }
)
// End of Response interceptor

export default apiNayoo
