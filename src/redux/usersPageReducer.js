import { usersApi } from '../api/UsersApi'
import { followApi } from '../api/FollowApi'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_IN_PROGRESS = 'SET_IN_PROGRESS'

const initialState = {
  users: [],
  currentPage: 1,
  usersPerPage: 100,
  totalCount: 0,
  isLoading: false,
  inProgress: [],
}
const usersPageReducer = (state = initialState, action) => {
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
    case SET_IN_PROGRESS:
      return {
        ...state,
        inProgress: action.isLoading
          ? [...state.inProgress, action.userId]
          : state.inProgress.filter((id) => id != action.userId),
      }
    default:
      return state
  }
}
export const follow = (id) => {
  return { type: FOLLOW, userId: id }
}
export const unFollow = (id) => {
  return { type: UNFOLLOW, userId: id }
}
export const setUsers = (users) => {
  return { type: SET_USERS, users }
}
export const setTotalCount = (totalUsers) => {
  return { type: SET_TOTAL_COUNT, totalCount: totalUsers }
}
export const setCurrentPage = (pageNumber) => {
  return { type: SET_CURRENT_PAGE, currentPage: pageNumber }
}
export const setIsLoading = (isLoading) => {
  return { type: SET_IS_LOADING, isLoading }
}
export const setInProgress = (isLoading, userId) => {
  return { type: SET_IN_PROGRESS, isLoading, userId }
}

export const getUsers = (page, count) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    const res = await usersApi.getUsers(page, count)
    const { items, totalCount } = res
    dispatch(setIsLoading(false))
    dispatch(setUsers(items))
    dispatch(setTotalCount(totalCount))
  }
}
export const getUsersByPage = (pageNumber, count) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(setIsLoading(true))

    const res = await usersApi.getUsers(pageNumber, count)
    const { items } = res
    dispatch(setIsLoading(false))
    dispatch(setUsers(items))
  }
}
export const unfollowUser = (userId) => {
  return async (dispatch) => {
    dispatch(setInProgress(true, userId))
    const res = await followApi.unFollowUser(userId)
    if (res.data.resultCode === 0) {
      dispatch(unFollow(userId))
    }
    dispatch(setInProgress(false, userId))
  }
}
export const followUser = (userId) => {
  return async (dispatch) => {
    dispatch(setInProgress(true, userId))
    const res = await followApi.followUser(userId)
    if (res.data.resultCode === 0) {
      dispatch(follow(userId))
    }
    dispatch(setInProgress(false, userId))
  }
}

export default usersPageReducer
