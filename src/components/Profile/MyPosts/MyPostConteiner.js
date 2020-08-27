import React from 'react'
import MyPosts from './MyPosts'
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profilePageReduser'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updatePost: (text) => {
      dispatch(updatePostActionCreator(text))
    },
  }
}
const MyPostConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostConteiner
