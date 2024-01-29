import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/post/PostsSlice'
import usersReducer from '../features/user/UserSlice'

export const store = configureStore({
    reducer : {
        posts : postsReducer,
        users : usersReducer,
    }
})