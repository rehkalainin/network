import API from 'api'

export const followApi = {
  followUser: async (userId) => {
    return await API.post('api/1.0/follow/' + userId, {})
  },
  unFollowUser: async (userId) => {
    return await API.delete('api/1.0/follow/' + userId)
  },
}
