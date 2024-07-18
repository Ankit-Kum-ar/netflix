import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice"
import movieSlice from "./Slices/movieSlice"

const store = configureStore({
    reducer: {
        // Add reducers here
        user: userReducer,
        movie: movieSlice,
    }
})

export default store