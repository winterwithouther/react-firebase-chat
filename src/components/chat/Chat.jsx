import "./Chat.css"
import React from 'react'

export default function Chat() {
  return (
    <div className="chat">
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt=""></img>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Lorem Ipsum dolor, sit amet.</p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png"></img>
                <img src="./video.png"></img>
                <img src="./info.png"></img>
            </div>
        </div>
        <div className="center"></div>
        <div className="bottom"></div>
    </div>
  )
}
