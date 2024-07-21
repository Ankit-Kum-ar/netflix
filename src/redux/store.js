import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice"
import movieSlice from "./Slices/movieSlice"
import geminiSlice from "./Slices/geminiSlice"

const store = configureStore({
    reducer: {
        // Add reducers here
        user: userReducer,
        movie: movieSlice,
        gemini: geminiSlice
    }
})

export default store