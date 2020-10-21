import { takeEvery, call, put } from 'redux-saga/effects'
import { usersApi } from '../../api/UsersApi'
import { followApi } from '../../api/FollowApi'
import {
  follow,
  setCurrentPage,
  setInProgress,
  setIsLoading,
  setTotalCount,
  setUsers,
  unFollow,
} from '../usersPageReducer'

const LOAD_USERS = 'LOAD_USERS'
const LOAD_USERS_BY_PAGE = 'LOAD_USERS_BY_PAGE'
const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'

export const loadUsers = (page, count) => {
  return {
    type: LOAD_USERS,
    page,
    count,
  }
}
export const loadUsersByPage = (pageNumber, count) => {
  return {
    type: LOAD_USERS_BY_PAGE,
    pageNumber,
    count,
  }
}
export const followUser = (userId) => {
  return {
    type: FOLLOW_USER,
    userId,
  }
}
export const unFollowUser = (userId) => {
  return {
    type: UNFOLLOW_USER,
    userId,
  }
}

export function* sagaUserPage() {
  yield takeEvery(LOAD_USERS, workerLoadUsers)
  yield takeEvery(LOAD_USERS_BY_PAGE, workerLoadUsersByPage)
  yield takeEvery(FOLLOW_USER, workerFollowUser)
  yield takeEvery(UNFOLLOW_USER, workerUnfollowUser)
}

export function* workerLoadUsers({ page, count }) {
  yield put(setIsLoading(true))
  const res = yield call(usersApi.getUsers, page, count)
  const { items, totalCount } = res
  yield put(setIsLoading(false))
  yield put(setUsers(items))
  yield put(setTotalCount(totalCount))
}

export function* workerLoadUsersByPage({ pageNumber, count }) {
  yield put(setCurrentPage(pageNumber))
  yield put(setIsLoading(true))
  const { items } = yield call(usersApi.getUsers, pageNumber, count)
  yield put(setIsLoading(false))
  yield put(setUsers(items))
}

export function* workerFollowUser({ userId }) {
  yield put(setInProgress(true, userId))
  const res = yield call(followApi.followUser, userId)
  if (res.data.resultCode === 0) {
    yield put(follow(userId))
  }
  yield put(setInProgress(false, userId))
}

export function* workerUnfollowUser({ userId }) {
  yield put(setInProgress(true, userId))
  const res = yield call(followApi.unFollowUser, userId)
  if (res.data.resultCode === 0) {
    yield put(unFollow(userId))
  }
  yield put(setInProgress(false, userId))
}
