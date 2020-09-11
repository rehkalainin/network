import React from 'react'
import MyPosts from './MyPosts'
import { addPost } from '../../../redux/profilePageReduser'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const MyPostConteiner = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostConteiner
