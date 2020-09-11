import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import { PostFormRedux } from './Post/PostForm'

const MyPosts = (props) => {
  const postsComponents = props.posts.map((post) => <Post message={post.message} />)

  const addPost = (value) => {
    props.addPost(value.newPostText)
  }

  return (
    <div className={style.posts}>
      <h3>My Posts </h3>
      <div>
        <PostFormRedux onSubmit={addPost} />
        {postsComponents}
      </div>
    </div>
  )
}
export default MyPosts
