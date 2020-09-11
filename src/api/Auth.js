import API from 'api'

export const authApi = {
  me: async () => {
    const res = await API.get('api/1.0/auth/me')
    return res
  },
  login: async (email, password, rememberme) => {
    const res = await API.post('api/1.0/auth/login', { email, password, rememberme })
    return res
  },
  logout: async () => {
    const res = await API.delete('api/1.0/auth/login')
    return res
  },
}
