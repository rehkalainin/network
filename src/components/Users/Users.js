import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../assets/photos/userPhoto.png'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { followUser, unFollowUser } from '../../redux/sagas/sagaUserPage'

const Users = ({ users, inProgress }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className={style.users}>
        {users.map((user) => (
          <div className={style.users_user}>
            <div className={style.users_user_view}>
              <NavLink to={'/profile/' + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={style.userPhoto}
                />
              </NavLink>
              <div className={style.button}>
                {user.followed ? (
                  <button
                    className={style.button_unFollow}
                    disabled={inProgress.some((id) => id === user.id)}
                    onClick={() => {
                      dispatch(unFollowUser(user.id))
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    className={style.button_follow}
                    disabled={inProgress.some((id) => id === user.id)}
                    onClick={() => {
                      dispatch(followUser(user.id))
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </div>

            <div className={style.users_user_info}>
              <div className={style.name}>{user.name}</div>
              <div className={style.location}>
                <div className={style.location_country}>{'user.country'}</div>
                <div className={style.location_city}>{'user.city'}</div>
              </div>
              <div className={style.status}>
                {user.status === null ? 'user.status' : user.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
