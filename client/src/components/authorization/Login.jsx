import React, { useState } from 'react'
import Input from '../../utils/input/Input'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/user'
import './authorization.css'

const Login = () => {
    const [email, setEmail] = useState("")
    // const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="authorization" method="post">
            <div className="authorization__header">Log in</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Email or login*" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Password*" />
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Log in</button>
        </div>
    )
}
export default Login