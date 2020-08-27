import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'

class UserApiConteiner extends React.Component {
  componentDidMount() {
    this.props.setIsLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`,
      )
      .then((resolve) => {
        this.props.setIsLoading(false)
        this.props.setUsers(resolve.data.items)
        this.props.setTotalCount(resolve.data.totalCount)
      })
  }

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
