import React from "react";
import style from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.wall}>
                <img src="https://aif-s3.aif.ru/images/011/938/71c8b30142a321f2696bbf49a635d1c2.jpg"/>
            </div>
            <div className={style.description}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo