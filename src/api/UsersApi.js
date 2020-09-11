import API from 'api'

export const usersApi = {
  getUsers: async (currentPage, usersPerPage) => {
    const res = await API.get(`/api/1.0/users`, {
      params: { page: currentPage, count: usersPerPage },
    })
    return res.data
  },
}
