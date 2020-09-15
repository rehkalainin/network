import { authApi } from '../api/Auth'
import { stopSubmit } from 'redux-form'

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

const initialState = {
  id: null,
  email: null,
  login: null,
  isLogin: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data }

    default:
      return state
  }
}
export const setAuthUserData = (id, email, login, isLogin) => {
  return { type: SET_AUTH_USER_DATA, data: { id, email, login, isLogin } }
}
export const authMe = () => {
  return async (dispatch) => {
    const res = await authApi.me()
    const { id, email, login } = res.data.data
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(id, email, login, true))
    }
  }
}
export const login = (email, password, rememberme) => async (dispatch) => {
  const res = await authApi.login(email, password, rememberme)
  if (res.data.resultCode === 0) {
    dispatch(authMe())
  } else {
    const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Common login error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}
export const logout = () => async (dispatch) => {
  const res = await authApi.logout()
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
