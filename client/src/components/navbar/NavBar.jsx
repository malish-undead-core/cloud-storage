import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/navbar-logo.jpg'
import { logOut } from '../../reducers/userReducer'
import './navBar.css'

const NavBar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="container">
                <img className="navbar__logo" src={Logo} alt="" />
                <div className="navbar__header">Undead Cloud</div>
                {!isAuth && <div className="navbar__login"><NavLink to="/login">Log in</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration" >Sign Up</NavLink></div>}
                {isAuth && <div className="navbar__login" onClick={() => dispatch(logOut())}>Log out</div>}
            </div>
        </div>
    )
}

export default NavBar