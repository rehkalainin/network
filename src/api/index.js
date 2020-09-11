import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_DOMAIN}`,
  withCredentials: true,
  headers: {
    'API-KEY': '9d366dde-7ef0-451b-83bd-9eec24ddec91',
  },
})
export default api
