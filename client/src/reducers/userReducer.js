const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"


const defaultState = {
    carrentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                carrentUser: action.payload.user,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                carrentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}

export const setUser = user => ({ type: SET_USER, payload: user })
export const logOut = () => ({ type: LOGOUT })
