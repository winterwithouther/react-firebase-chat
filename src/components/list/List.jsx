import "./List.css"
import Userinfo from "./userinfo/Userinfo"
import ChatList from "./chatList/ChatList"
import React from 'react'

export default function List() {
  return (
    <div className="list">
        <Userinfo/>
        <ChatList/>
    </div>
  )
}
