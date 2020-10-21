import React, { useEffect } from 'react'
import Users from './Users'
import Preloader from 'components/Common/Preloader/Preloader'
import Paginator from '../Common/paginator/Paginator'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers, loadUsersByPage } from '../../redux/sagas/sagaUserPage'
import {
  getAllUsers,
  getCurrentPage,
  getInProgress,
  getIsLoading,
  getTotalCount,
  getUsersPerPage,
} from '../../redux/selectors/usersSelectors'

const UserApiConteiner = () => {
  const users = useSelector(getAllUsers)
  const currentPage = useSelector(getCurrentPage)
  const usersPerPage = useSelector(getUsersPerPage)
  const totalCount = useSelector(getTotalCount)
  const isLoading = useSelector(getIsLoading)
  const inProgress = useSelector(getInProgress)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers(currentPage, usersPerPage))
  }, [])

  const onChangePage = (pageNumber) => {
    dispatch(loadUsersByPage(pageNumber, usersPerPage))
  }

  return (
    <div>
      {isLoading ? <Preloader /> : null}
      <Paginator
        totalCount={totalCount}
        itemsPerPage={usersPerPage}
        butchSize={20}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
      <Users users={users} inProgress={inProgress} />
    </div>
  )
}

export default UserApiConteiner
