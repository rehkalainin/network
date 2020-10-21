import React from 'react'
import { ReduxLoginForm } from './loginForm/LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/sagas/sagaAuth'

import Redirect from 'react-router-dom/es/Redirect'

const Login = () => {
  const isLogin = useSelector((state) => state.auth.isLogin)
  const dispatch = useDispatch()

  const onSubmit = (formData) => {
    console.log(formData)
    const { email, password, rememberMe } = formData
    dispatch(login(email, password, rememberMe))
  }

  if (isLogin) return <Redirect to={'/profile'} />

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
