const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
  users: [],
  currentPage: 1,
  usersPerPage: 100,
  totalCount: 0,
  isLoading: false,
}
const usersPageReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS:
      return { ...state, users: action.users }

    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}
export const usersFollowAC = (id) => {
  return { type: FOLLOW, userId: id }
}
export const usersUnfollowAC = (id) => {
  return { type: UNFOLLOW, userId: id }
}
export const setUsersAC = (users) => {
  return { type: SET_USERS, users: users }
}
export const setTotalCountAC = (totalUsers) => {
  return { type: SET_TOTAL_COUNT, totalCount: totalUsers }
}
export const setCurrentPageAC = (pageNumber) => {
  return { type: SET_CURRENT_PAGE, currentPage: pageNumber }
}
export const setIsLoadingAC = (isLoading) => {
  return { type: SET_IS_LOADING, isLoading: isLoading }
}
export default usersPageReduser
