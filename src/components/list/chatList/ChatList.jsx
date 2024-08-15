import "./chatList.css"
import React, { useState } from 'react'
import AddUser from "./addUser/addUser"

export default function ChatList() {
    const [addMode, setAddMode] = useState(false)

    return (
    <div className="chatList">
        <div className="search">
            <div className="searchbar">
                <img src="./search.png" alt=""></img>
                <input type="text" placeholder="search"></input>
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add"
            onClick={() => setAddMode((prev) => !prev)}></img>
        </div>
        <div className="item">
            <img src="./avatar.png" alt=""></img>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt=""></img>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt=""></img>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt=""></img>
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello</p>
            </div>
        </div>
        {addMode && <AddUser/>}
    </div>
    )
}
