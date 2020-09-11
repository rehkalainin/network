import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostConteiner from './MyPosts/MyPostConteiner'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        photo={props.photo}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostConteiner />
    </div>
  )
}
export default Profile
