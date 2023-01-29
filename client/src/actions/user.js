import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const registration = async (email, username, password, retypePassword) => {
    try {
        const response = await axios.post("http://localhost:8001/api/auth/registration", {
            email,
            username,
            password,
            retypePassword
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:8001/api/auth/login", {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem("token", response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get("http://localhost:8001/api/auth/auth",
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            dispatch(setUser(response.data.user))
            localStorage.setItem("token", response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem("token")
        }
    }
}