import React, { useState } from 'react'
import { registration } from '../../actions/user'
import Input from '../../utils/input/Input'
import './registration.css'

const Registration = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")

    return (
        <div className="registration" method="post">
            <div className="registration__header">Sign Up</div>
            <Input value={email} setValue={setEmail} type="email" placeholder="Email*" />
            <Input value={username} setValue={setUsername} type="username" placeholder="Username to log in*" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Password*" />
            <Input value={retypePassword} setValue={setRetypePassword} type="password" placeholder="Retype Password*" />
            <button className="registration__btn" onClick={() => registration(email, username, password, retypePassword)}>Sign Up</button>
        </div>
    )
}
export default Registration