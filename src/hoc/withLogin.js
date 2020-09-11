import React from 'react'
import Redirect from 'react-router-dom/es/Redirect'

export const withLogin = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isLogin) return <Redirect to={'/login'} />
      return <Component {...this.props} />
    }
  }

  return RedirectComponent
}
