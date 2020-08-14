import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {

    const postsComponents = props.posts
        .map(post => <Post message={post.message}/>)

    let textPost = React.createRef()

    const addPost = () => {
        props.addPost()
        props.updateText(" ")
    }
    const updateText = () => {
        const text = textPost.current.value
        props.updateText(text)
    }

    return (
        <div className={style.posts}>
            <h3>My Posts </h3>
            <div>
                <div>
                    <textarea onChange={updateText}
                              ref={textPost}
                              value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                {postsComponents}
            </div>
        </div>
    )
}
export default MyPosts