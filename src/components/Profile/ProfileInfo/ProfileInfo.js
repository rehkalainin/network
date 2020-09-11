import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from './profileStatus/ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={style.wall}>
        <img src="https://aif-s3.aif.ru/images/011/938/71c8b30142a321f2696bbf49a635d1c2.jpg" />
      </div>
      <div className={style.profile_wraper}>
        <span className={style.profile}>
          {props.profile.photos.large ? (
            <img src={props.profile.photos.large} />
          ) : (
            <img src={props.photo} />
          )}
        </span>
        <span className={style.profile_info}>
          <div>
            <div>
              <h2>{props.profile.fullName ? props.profile.fullName : 'profile.fullName'}</h2>
            </div>
            <div>{props.profile.aboutMe ? props.profile.aboutMe : 'profile.aboutMe'}</div>
          </div>
          <div>
            <div>Ищу работу: {props.profile.lookingForAJob ? 'да' : '---'}</div>
            <div>
              Описание :{' '}
              {props.profile.lookingForAJobDescription
                ? props.profile.lookingForAJobDescription
                : 'Description'}
            </div>
          </div>
        </span>
      </div>
      <div className={style.profileStatus}>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}
export default ProfileInfo
