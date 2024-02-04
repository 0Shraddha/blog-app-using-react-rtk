 import React, { useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
//import {nanoid} from '@reduxjs/toolkit'
 import { useParams, useNavigate, Navigate } from "react-router-dom";
import { editPost } from "./PostsSlice";
import { nanoid } from "@reduxjs/toolkit";
 //import { editPost } from "./PostsSlice";

// const EditPostForm = () => {
//   //const {id} = useParams();  //takes id from router
//   //const posts = useSelector((state)=> state.posts);
//   //console.log(posts);
//  // const existingPost = posts.filter(f => f.id ==id);
//   //const {title, content} = existingPost[0];
// //  const [newTitle, setNewTitle] = useState(title);
// //  const [ newContent, setNewContent] = useState(content);
// const dispatch = useDispatch();
// const navigate = useNavigate();

// const [newTitle, setNewTitle] = useState(posts.title);
// const [newContent, setNewContent] = useState(posts.content);
// console.log(newTitle);

// const onTitleChanged = e => setNewTitle(e.target.value);
// const onContentChanged = e => setNewContent(e.target.value);

// const onSavePostClicked = () => {
//   console.log('Saving post:', { title, content });

//   if (title && content) {
//     dispatch(editPost({
//       id: nanoid,
//       title : newTitle,
//       content : newContent
//     })
//     );
//     navigate('/');
//   }
// };
// const savePost = Boolean(title) && Boolean(content);
//   return (
  
//     <div>
//       <section>
//        <h2>EDIT</h2>
//        <form>
//          <label htmlFor="postTitle">Post Title:</label>
//        <input
//           type="text"
//           id="postTitle"
//           name="postTitle"
//            value={newTitle}
//           onChange={onTitleChanged}
//         />
//         <label htmlFor="postContent">Content:</label>
//         <input
//           type="text"
//           id="postContent"
//           name="postContent"
//            value={newContent}
//           onChange={onContentChanged}
//         />
//         <button type="button" 
//          disabled={!canSave}
//           onClick={onSavePostClicked}
//         >
//           Save Post
//         </button>
//       </form>
//     </section>
//     </div>
//   )
// }
const EditPostForm=()=>{
  const postState = useSelector((state) => state.posts);
  const {title,content,list} =postState;
  console.log(postState);


  return(
    <>
    <h2>Edit</h2>
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" defaultValue={title} />
      <label htmlFor="content">Content</label>
      <input type="text" defaultValue={content} />
    </form>
    </>
  )
}
export default EditPostForm