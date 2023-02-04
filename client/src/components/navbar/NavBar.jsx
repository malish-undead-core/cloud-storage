import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getFiles, searchFiles } from '../../actions/file'
import Logo from '../../assets/img/navbar-logo.jpg'
import { showLoader } from '../../reducers/appReducer'
import { logOut } from '../../reducers/userReducer'
import avatarLogo from '../../assets/img/avatar.png'
import { API_URL } from '../../config'
import './navBar.css'

const NavBar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.files.currentDir)
    const currentUser = useSelector(state => state.user.currentUser)
    const path = useSelector(state => state.files.files).map(parent => parent.path)
    console.log(path)
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState("")
    const [searchTimeout, setSearchTimeout] = useState(false)
    const avatar = currentUser ? `${API_URL + currentUser}` : avatarLogo

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if (e.target.value !== "") {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value))
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }

    return (
        <div className="navbar">
            <div className="container">
                <NavLink to="/">
                    <img className="navbar__logo" src={Logo} alt="" />
                </NavLink>
                <div className="navbar__header">Undead Cloud</div>
                {/* <div style={{ width: 30, height: 30 }}>{path}</div> */}
                {isAuth && <input
                    value={searchName}
                    onChange={e => searchChangeHandler(e)}
                    type="text"
                    className="navbar__search"
                    placeholder="File name..."
                />
                }
                {!isAuth && <div className="navbar__login"><NavLink to="/login">Log in</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration" >Sign Up</NavLink></div>}
                {isAuth && <div className="navbar__login" onClick={() => dispatch(logOut())}>Log out</div>}
                {isAuth &&
                    <NavLink to="/profile">
                        <img className="navbar__avatar" src={avatar} alt="" />
                    </NavLink>}
            </div>
        </div >
    )
}

export default NavBar