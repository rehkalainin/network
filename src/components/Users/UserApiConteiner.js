import React from 'react'
import PropTypes from 'prop-types'
import Users from './Users'
import Preloader from 'components/Common/Preloader/Preloader'
import Paginator from '../Common/paginator/Paginator'

class UserApiConteiner extends React.Component {
  static propTypes = {
    setIsLoading: PropTypes.func.isRequired,
    setUsers: PropTypes.func,
    setTotalCount: PropTypes.func,
    setInProgress: PropTypes.func,
    currentPage: PropTypes.number,
    usersPerPage: PropTypes.number,
    users: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    inProgress: PropTypes.arrayOf(PropTypes.number),
  }
  static defaultProps = {
    isLoading: false,
  }

  componentDidMount() {
    const { currentPage, usersPerPage, getUsers } = this.props
    getUsers(currentPage, usersPerPage)
  }

  /**
   * @param pageNumber {number} номер страницы
   *
   * @return void
   * */
  async onChangePage(pageNumber) {
    const { usersPerPage, getUsersByPage } = this.props
    getUsersByPage(pageNumber, usersPerPage)
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? <Preloader /> : null}
        <Paginator
          totalCount={this.props.totalCount}
          itemsPerPage={this.props.usersPerPage}
          butchSize={20}
          currentPage={this.props.currentPage}
          onChangePage={this.onChangePage.bind(this)}
        />
        <Users
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          inProgress={this.props.inProgress}
          setInProgress={this.props.setInProgress}
          unfollowUser={this.props.unfollowUser}
          followUser={this.props.followUser}
        />
      </div>
    )
  }
}

export default UserApiConteiner
