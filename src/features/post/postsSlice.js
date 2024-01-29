import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [
      {
        id: 1,
        title: "Redux",
        content:
          "Learning redux as the foundation. Redux is a predictable state container for JavaScript apps.  Redux is a predictable state container for JavaScript apps. ",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
      },
      {
        id: 2,
        title: "Redux ToolKit",
        content: "Learning rtk after redux.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
      },
    ],
    title: "",
    content: "",
  },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setContent(state, action) {
      state.content = action.payload;
    },
    postAdded(state, action) {
      const { id, title, content } = action.payload;
      const date = new Date().toISOString();
      const initialState = state.list ? [...state.list] : [];
      initialState.push({ id, title, content, date });
      state.list = initialState;
      console.log("list:", state.list);
    },
    deleteData(state,action){
      state.list = state.list.filter((data)=> data.id !== action.payload);
      console.log(state.list);
    },
    deleteAll(state,action){
      state.list = [];
    }
  },
});

export const selectPostsById = (state, postId) =>
  state.posts.list.find((post) => post.id === postId);

export const { postAdded, setTitle, setContent, deleteData, deleteAll } = PostsSlice.actions;

export default PostsSlice.reducer;
