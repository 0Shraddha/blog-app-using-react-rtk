import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/post/PostsSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import usersReducer from '../features/user/UserSlice'
//import thunk from 'redux-thunk';


const persistConfig = {
    key : 'root',
    version : 1,
    storage,
}

const reducer = combineReducers({
    posts : postsReducer,
    users : usersReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    // reducer : {
    //     posts : postsReducer,
    //     users : usersReducer,
    // }

    reducer : persistedReducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store);