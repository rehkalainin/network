import UserApiConteiner from './UserApiConteiner'
import { connect } from 'react-redux'

import {
  follow,
  followUser,
  getUsers,
  getUsersByPage,
  setCurrentPage,
  setInProgress,
  setIsLoading,
  setTotalCount,
  setUsers,
  unFollow,
  unfollowUser,
} from '../../redux/usersPageReducer'
import { withLogin } from '../../hoc/withLogin'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    totalCount: state.userPage.totalCount,
    currentPage: state.userPage.currentPage,
    usersPerPage: state.userPage.usersPerPage,
    isLoading: state.userPage.isLoading,
    inProgress: state.userPage.inProgress,
    isLogin: state.auth.isLogin,
  }
}
export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalCount,
    setIsLoading,
    setInProgress,
    setCurrentPage,
    getUsers,
    getUsersByPage,
    unfollowUser,
    followUser,
  }),
  withLogin,
)(UserApiConteiner)
