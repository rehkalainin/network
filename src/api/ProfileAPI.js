import API from 'api'

export const profileApi = {
  getProfile: async (userId) => {
    const res = await API.get(`/api/1.0/profile/` + userId)
    return res.data
  },
  getProfileStatus: async (userId) => {
    const res = await API.get(`/api/1.0/profile/status/` + userId)
    return res.data
  },
  updateProfileStatus: async (text) => {
    return await API.put(`/api/1.0/profile/status/`, { status: text })
  },
}
