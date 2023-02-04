import fileReducer from "./fileReducer";
import userReducer from "./userReducer";
import { configureStore } from '@reduxjs/toolkit'
import uploadReducer from "./uploadReducer";
import appReducer from "./appReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        files: fileReducer,
        upload: uploadReducer,
        app: appReducer
    }
})

export default store