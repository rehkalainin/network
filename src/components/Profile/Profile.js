import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostConteiner from './MyPosts/MyPostConteiner'

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostConteiner />
    </div>
  )
}
export default Profile
