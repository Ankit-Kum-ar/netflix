import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice"
import movieSlice from "./Slices/movieSlice"
import gptSlice from "./Slices/gptSlice"

const store = configureStore({
    reducer: {
        // Add reducers here
        user: userReducer,
        movie: movieSlice,
        gpt: gptSlice
    }
})

export default store