import React from 'react'
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus } from '../../redux/profilePageReduser'
import Profile from './Profile'
import withRouter from 'react-router-dom/es/withRouter'
import userPhoto from 'assets/photos/userPhoto.png'
import { withLogin } from '../../hoc/withLogin'
import { compose } from 'redux'

class ProfileConteiner extends React.Component {
  async componentDidMount() {
    const { getProfile, getStatus } = this.props

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 11128
    }

    getProfile(userId)
    getStatus(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        photo={userPhoto}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isLogin: state.auth.isLogin,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  //withLogin,
  withRouter,
)(ProfileConteiner)
