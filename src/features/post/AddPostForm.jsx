import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'

import {postAdded, setTitle, setContent} from './PostsSlice'
// import { Link } from 'react-router-dom'

const AddPostForm = () => {
  const dispatch = useDispatch()

const title = useSelector((state)=> state.posts.title);
const content = useSelector((state)=> state.posts.content);

const onTitleChanged = (e) => {
  console.log('Title Changed:', e.target.value);
  dispatch(setTitle(e.target.value));
};

const onContentChanged = (e) => {
  console.log('Content Changed:', e.target.value);
  dispatch(setContent(e.target.value));
};

const onSavePostClicked =()=> {
  if(title && content){
    dispatch(
      postAdded({
        id : nanoid(),
        title,
        content
      })
    )
    dispatch(setTitle(""))
    dispatch(setContent(""))
  }
}
const savePost = Boolean(title) && Boolean(content);
  return (
    <section>
         <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <input
                    type='text'
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}

                />
                <button type='button' disabled= {!savePost} onClick={onSavePostClicked}>Save Post</button>
                </form>

        </section>
  )
}

export default AddPostForm