import { takeEvery, call, put } from 'redux-saga/effects'
import { profileApi } from '../../api/ProfileAPI'
import { setProfile, setProfileStatus } from '../profilePageReduser'

const LOAD_PROFILE = 'LOAD_PROFILE'
const LOAD_STATUS = 'LOAD_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'

export const loadProfile = (userId) => {
  return {
    type: LOAD_PROFILE,
    userId,
  }
}
export const loadStatus = (userId) => {
  return {
    type: LOAD_STATUS,
    userId,
  }
}
export const updateStatus = (status) => {
  return {
    type: UPDATE_STATUS,
    status,
  }
}

export function* sagaProfilePage() {
  yield takeEvery(LOAD_PROFILE, workerLoadProfile)
  yield takeEvery(LOAD_STATUS, workerLoadStatus)
  yield takeEvery(UPDATE_STATUS, workerUpdateStatus)
}

export function* workerLoadProfile(action) {
  const res = yield call(profileApi.getProfile, action.userId) // делает сайд эффекты
  yield put(setProfile(res)) // аналог dispatch
}

export function* workerLoadStatus(action) {
  const res = yield call(profileApi.getProfileStatus, action.userId)
  yield put(setProfileStatus(res))
}

export function* workerUpdateStatus(action) {
  const res = yield call(profileApi.updateProfileStatus, action.status)
  if (res.data.resultCode === 0) yield put(setProfileStatus(res))
}
