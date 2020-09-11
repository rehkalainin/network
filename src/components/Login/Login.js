import React from 'react'
import LoginForm, { ReduxLoginForm } from './loginForm/LoginForm'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/authReducer'
import Redirect from 'react-router-dom/es/Redirect'

class Login extends React.Component {
  onSubmit = (formData) => {
    const { email, password, rememberme } = formData
    this.props.login(email, password, rememberme)
  }

  render() {
    if (this.props.isLogin) return <Redirect to={'/profile'} />
    return (
      <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
})

export default connect(mapStateToProps, { login, logout })(Login)
