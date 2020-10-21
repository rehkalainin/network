import { authApi } from '../../api/Auth'
import { stopSubmit } from 'redux-form'
import { setAuthUserData } from '../authReducer'
import { takeEvery, call, put } from 'redux-saga/effects'

const AUTH_ME = 'AUTH_ME'
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

export const authMe = () => {
  return {
    type: AUTH_ME,
  }
}
export const login = (email, password, rememberMe) => {
  return {
    type: LOG_IN,
    email,
    password,
    rememberMe,
  }
}
export const logout = () => {
  return {
    type: LOG_OUT,
  }
}

export function* sagaAuth() {
  yield takeEvery(AUTH_ME, workerAuthMe)
  yield takeEvery(LOG_IN, workerLogIn)
  yield takeEvery(LOG_OUT, workerLogOut)
}

export function* workerAuthMe() {
  const res = yield call(authApi.me)
  const { id, email, login } = res.data.data
  if (res.data.resultCode === 0) {
    yield put(setAuthUserData(id, email, login, true))
  }
}

export function* workerLogIn({ email, password, rememberMe }) {
  const res = yield call(authApi.login, email, password, rememberMe)
  if (res.data.resultCode === 0) {
    yield put(authMe())
  } else {
    const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Common login error'
    yield put(stopSubmit('login', { _error: message }))
  }
}

export function* workerLogOut() {
  const res = yield call(authApi.logout)
  if (res.data.resultCode === 0) {
    yield put(setAuthUserData(null, null, null, false))
  }
}
