import "./userInfo.css"
import React from 'react'

export default function Userinfo() {
  return (
    <div className="userInfo">
        <div className="user">
            <img src="./avatar.png" alt=""></img>
            <h2>John Doe</h2>
        </div>
        <div className="icons">
            <img src="./more.png" alt=""></img>
            <img src="./video.png" alt=""></img>
            <img src="./edit.png" alt=""></img>
        </div>
    </div>
  )
}
