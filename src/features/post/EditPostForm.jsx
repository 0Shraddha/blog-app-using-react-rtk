import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import { useParams, useNavigate } from 'react-router-dom'

import {selectPostsById} from './PostsSlice'
//import {selectPostsById, updatePost} from './PostsSlice'

const EditFormPost = () => {
const {postId} =useParams()
const navigate = useNavigate()

const post = useSelector((state) => selectPostsById(state),Number(postId))

  const dispatch = useDispatch()

  
  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [reqStatus, setReqStatus] = useState('idle');

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const canSave =[title, content].every(Boolean) && reqStatus==='idle';
  // const onSavePostClicked = () => {
  //   if(canSave){
  //     try{
  //       setReqStatus('pending')
  //       dispatch(updatePost({id:post.id, title, body:content})).unwrap()

  //       setTitle('')
  //       setContent('')
  //       navigate(`/post/${postId}`)
  //     }catch(err){
  //       console.log('Failed to update the post', err)
  //     }finally{
  //       setReqStatus('idle')
  //     }
  //   }
  // }

  if(!post){
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
         <h2>EDIT</h2>
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

export default EditFormPost