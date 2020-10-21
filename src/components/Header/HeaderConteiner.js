import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { authMe, logout } from '../../redux/sagas/sagaAuth'

const HeaderContainer = () => {
  const login = useSelector((state) => state.auth.login)
  const isLogin = useSelector((state) => state.auth.isLogin)

  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(logout())
  }
  useEffect(() => {
    dispatch(authMe())
  }, [])

  return <Header login={login} isLogin={isLogin} logOut={logOut} authMe={authMe} />
}

export default HeaderContainer
