import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { registration } from '../../actions/user'
// import { setPopupDisplay } from '../../reducers/fileReducer'
import Input from '../../utils/input/Input'
import './authorization.css'

const Registration = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    // const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    function signUp() {
        registration(email, username, password, retypePassword)
        // dispatch(setPopupDisplay("none"))
    }

    return (
        <form onSubmit={handleSubmit} className="authorization" method="post">
            <div className="authorization__header">Sign Up</div>
            <Input value={email} setValue={setEmail} type="email" placeholder="Email*" />
            <Input value={username} setValue={setUsername} type="username" placeholder="Username to log in*" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Password*" />
            <Input value={retypePassword} setValue={setRetypePassword} type="password" placeholder="Retype Password*" />
            <button className="authorization__btn" onClick={() => signUp()}>Sign Up</button>
        </form >
    )
}
export default Registration