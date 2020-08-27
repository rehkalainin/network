import React from 'react'
import PropTypes from 'prop-types'
import * as axios from 'axios'
import Users from './Users'
import Preloader from 'components/Common/Preloader/Preloader'
import API from 'api'

class UserApiConteiner extends React.Component {
  static propTypes = {
    setIsLoading: PropTypes.func.isRequired,
    setUsers: PropTypes.func,
    setTotalCount: PropTypes.func,
    currentPage: PropTypes.number,
    usersPerPage: PropTypes.number,
    users: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
  }
  static defaultProps = {
    isLoading: false,
  }

  async componentDidMount() {
    const { setIsLoading, setUsers, setTotalCount, currentPage, usersPerPage } = this.props
    setIsLoading(true)

    const res = await API.get(`/api/1.0/users`, {
      params: { page: currentPage, count: usersPerPage },
    })

    const {
      data: { items, totalCount },
    } = res
    setIsLoading(false)
    setUsers(items)
    setTotalCount(totalCount)
  }

  /**
   * @param pageNumber {number} номер страницы
   *
   * @return void
   * */
  onChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`,
      )
      .then((responce) => {
        this.props.setIsLoading(false)
        this.props.setUsers(responce.data.items)
      })
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          users={this.props.users}
          totalCount={this.props.totalCount}
          usersPerPage={this.props.usersPerPage}
          currentPage={this.props.currentPage}
          onChangePage={this.onChangePage}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
        />
      </div>
    )
  }
}

export default UserApiConteiner
