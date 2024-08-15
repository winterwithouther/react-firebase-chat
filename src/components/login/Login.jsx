import "./login.css"
import { toast, ToastContainer } from 'react-toastify';
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from "@firebase/firestore";
import upload from "../../lib/upload";

export default function Login() {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    function handleAvatar(e) {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }       
    }

    function handleLogin(e) {
        e.preventDefault()
    }

    async function handleRegister(e) {
        e.preventDefault()
        const formData = new FormData(e.target)

        const {username, email, password} = Object.fromEntries(formData)
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const imgUrl = await upload(avatar.file)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                block: []
            })

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            })

            toast.success("Account Created!")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={(handleRegister)}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} />
                        Upload an Image</label>
                    <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
