import {createSlice} from '@reduxjs/toolkit';
import {sub} from 'date-fns';

const initialState = [
    {id : 1, title: "Redux", content : "Learning redux as the foundation. Redux is a predictable state container for JavaScript apps.  Redux is a predictable state container for JavaScript apps. ", date : sub(new Date(), {minutes : 10}).toISOString()},
    {id : 2, title: "Redux ToolKit", content : "Learning rtk after redux.", date : sub(new Date(), {minutes : 5}).toISOString()}
]

const PostsSlice =createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdded : {
            reducer(state,action){
                const { id, title, content } = action.payload;
                const date = new Date().toISOString();
            state.push({ id, title, content, date
             })
        },
        reactionAdded(state,action){
           const {postId, reaction} =action.payload
           const existingPost = state.find(post=> post.id === postId)
           if(existingPost){
               existingPost.reactions[reaction]++
           }
        }
        
    }
}})
export const selectAllPosts = (state) => state.posts;
export const {postAdded, reactionAdded} = PostsSlice.actions
export default PostsSlice.reducer