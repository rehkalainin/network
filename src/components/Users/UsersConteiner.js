import {
  setCurrentPageAC,
  setIsLoadingAC,
  setTotalCountAC,
  setUsersAC,
  usersFollowAC,
  usersUnfollowAC,
} from '../../redux/usersPageReduser'
import UserApiConteiner from './UserApiConteiner'

const { connect } = require('react-redux')

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    totalCount: state.userPage.totalCount,
    currentPage: state.userPage.currentPage,
    usersPerPage: state.userPage.usersPerPage,
    isLoading: state.userPage.isLoading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(usersFollowAC(userId))
    },
    unFollow: (userId) => {
      dispatch(usersUnfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalCount: (totalUsers) => {
      dispatch(setTotalCountAC(totalUsers))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setIsLoading: (isLoading) => {
      dispatch(setIsLoadingAC(isLoading))
    },
  }
}

const UserConteiner = connect(mapStateToProps, mapDispatchToProps)(UserApiConteiner)

export default UserConteiner
