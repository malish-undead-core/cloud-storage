import fileReducer from "./fileReducer";
import userReducer from "./userReducer";
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        user: userReducer,
        files: fileReducer
    }
})

export default store