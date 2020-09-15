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
import {
  getAllUsers,
  getCurrentPage,
  getInProgress,
  getIsLoading,
  getIsLogin,
  getTotalCount,
  getUsersPerPage,
} from '../../redux/selectors/usersSelectors'

const mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    usersPerPage: getUsersPerPage(state),
    isLoading: getIsLoading(state),
    inProgress: getInProgress(state),
    isLogin: getIsLogin(state),
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
