import React from 'react'
import Header from './Header'
import API from 'api'
import { connect } from 'react-redux'
import { authMe, logout, setAuthUserData } from '../../redux/authReducer'

class HeaderConteiner extends React.Component {
  async componentDidMount() {
    const { authMe } = this.props
    authMe()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isLogin: state.auth.isLogin,
})

export default connect(mapStateToProps, { authMe, logout })(HeaderConteiner)
