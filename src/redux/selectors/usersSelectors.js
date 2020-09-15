export const getAllUsers = (state) => {
  return state.userPage.users
}

export const getTotalCount = (state) => {
  return state.userPage.totalCount
}

export const getCurrentPage = (state) => {
  return state.userPage.currentPage
}

export const getUsersPerPage = (state) => {
  return state.userPage.usersPerPage
}

export const getIsLoading = (state) => {
  return state.userPage.isLoading
}

export const getInProgress = (state) => {
  return state.userPage.inProgress
}

export const getIsLogin = (state) => {
  return state.auth.isLogin
}
