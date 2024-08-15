import "./Chat.css"
import EmojiPicker from "emoji-picker-react"
import React, { useState } from 'react'

export default function Chat() {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")

    function handleEmoji(e) {
        setText(prev => prev + e.emoji)
        setOpen(false)
    }

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
            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem Ipsum dolor sit amet consectetur adipisicing elit.
                            Natus quis quae qui! Sint asperiories vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt=""></img>
                    <div className="texts">
                        <p>
                            Lorem Ipsum dolor sit amet consectetur adipisicing elit.
                            Natus quis quae qui! Sint asperiories vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://www.superherotoystore.com/cdn/shop/articles/e33c2fa94c03efa06678116f80d62d0d_708x.jpg?v=1590599656" alt="bruh"></img>
                        <p>
                            Lorem Ipsum dolor sit amet consectetur adipisicing elit.
                            Natus quis quae qui! Sint asperiories vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt=""></img>
                    <div className="texts">
                        <p>
                            Lorem Ipsum dolor sit amet consectetur adipisicing elit.
                            Natus quis quae qui! Sint asperiories vero nobis deserunt aperiam iusto
                            repellendus, optio impedit eius, reprehenderit dolorum nihil
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png"></img>
                    <img src="./camera.png"></img>
                    <img src="./mic.png"></img>
                </div>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    onChange={(e) => setText(e.target.value)} 
                    value={text} 
                ></input>
                <div className="emoji">
                    <img src="./emoji.png" alt=""
                    onClick={() => setOpen(prev => !prev)}></img>
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="send-button">Send</button>
            </div>
        </div>
    )
}
