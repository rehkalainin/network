import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <img src="https://logotab.ru/storage/logotypes/1071/logotip-tovary-dlja-ptic-962.jpg.jpg" />
      </div>
      <div className={style.header_login}>
        {props.isLogin ? (
          <div>
            {props.login} <button onClick={props.logout}>logout</button>
          </div>
        ) : (
          <NavLink to={'/login'}>
            <h5>Login</h5>
          </NavLink>
        )}
      </div>
    </header>
  )
}
export default Header
