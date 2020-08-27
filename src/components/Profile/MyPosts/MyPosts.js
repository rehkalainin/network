import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const postsComponents = props.posts.map((post) => <Post message={post.message} />)

  let textPost = React.createRef()

  const onAddPost = () => {
    props.addPost()
    props.updatePost(' ')
  }
  const onUpdatePost = () => {
    const text = textPost.current.value
    props.updatePost(text)
  }

  return (
    <div className={style.posts}>
      <h3>My Posts </h3>
      <div>
        <div>
          <textarea onChange={onUpdatePost} ref={textPost} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
        {postsComponents}
      </div>
    </div>
  )
}
export default MyPosts
