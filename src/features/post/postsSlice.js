import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { useState } from "react";

// const title = localStorage.getItem('title');
// const content = localStorage.getItem('content');

// const getDataFromLS = () => {
//   const data = localStorage.getItem("lists");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };
// const [list, setLists] = useState(getDataFromLS());

// useEffect(() => {
//   localStorage.setItem("lists", JSON.stringify(list));
//   //JSON.stringify is used to store the value as string
// }, [list]);

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
      //console.log(title);
    },
    editTitle(state,action){
        const {id, title,content} = action.payload;
        const edit =  state.find(post = post.id == id);
        if(edit){
          edit.title = title;
          edit.content = content;
        }
    },
    deleteData(state,action){
      state.list = state.list.filter((data)=> data.id !== action.payload);
     // console.log(state.list);
    },
    deleteAll(state,action){
      state.list = [];
    }
  },
});

export const selectPostsById = (state, postId) =>
  state.posts.list.find((post) => post.id === postId);
  

export const { postAdded, setTitle, setContent, deleteData, deleteAll, editPost } = PostsSlice.actions;

export default PostsSlice.reducer;
