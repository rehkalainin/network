import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadProfile, loadStatus } from '../../redux/profilePageReduser'
import Profile from './Profile'
import withRouter from 'react-router-dom/es/withRouter'
import userPhoto from 'assets/photos/userPhoto.png'
import { withLogin } from '../../hoc/withLogin'
import { compose } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProfileContainer = () => {
  const { userId } = useParams() // для вытаскивания параметров из урла
  const profile = useSelector((state) => state.profilePage.profile)
  const status = useSelector((state) => state.profilePage.status)
  const isLogin = useSelector((state) => state.auth.isLogin)

  const dispatch = useDispatch()

  useEffect(() => {
    const id = !userId ? 11128 : userId

    dispatch(loadProfile(id))
    dispatch(loadStatus(id))
  }, [])

  return <Profile profile={profile} photo={userPhoto} status={status} />
}

export default compose(
  //withLogin,
  withRouter,
)(ProfileContainer)
