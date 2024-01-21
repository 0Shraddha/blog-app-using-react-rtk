import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/post/PostsSlice'

export const store = configureStore({
    reducer : {
        posts : postsReducer,
    }
})