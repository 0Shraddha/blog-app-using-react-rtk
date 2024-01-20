import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id : 1, title: "Redux", content : "Learning redux as the foundation. Redux is a predictable state container for JavaScript apps.  Redux is a predictable state container for JavaScript apps. "},
    {id : 2, title: "Redux ToolKit", content : "Learning rtk after redux."}

]

const PostsSlice =createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})
export const selectAllPosts = (state) => state.posts;
export const {postAdded} = PostsSlice.actions
export default PostsSlice.reducer