import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return(
        <div className={style.item}>
            <img src="https://vokrug-tv.ru/pic/product/1/9/6/b/196b75624f01724678dad79fab82b6fa.jpeg"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}
export default Post