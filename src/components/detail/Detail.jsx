import "./Detail.css"
import React from 'react'

export default function Detail() {
  return (
    <div className="detail">
        <div className="user">
            <img src="./avatar.png" alt=""></img>
            <h2>Jane Doe</h2>
            <p>Lorem Ipsum Dolor sit amet</p>
        </div>
        <div className="info">
            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt=""></img>
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Privacy & help</span>
                    <img src="./arrowUp.png" alt=""></img>
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Shared Photos</span>
                    <img src="./arrowDown.png" alt=""></img>
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="https://practicaltyping.com/wp-content/uploads/2020/09/vegeta2.jpg" alt=""></img>
                            <span>Photo.png</span>
                        </div>
                        <img src="./download.png" className="icon" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt=""></img>
                </div>
            </div>
            <button>Block User</button>
            <button className="logout">Logout</button>
        </div>
    </div>
  )
}
