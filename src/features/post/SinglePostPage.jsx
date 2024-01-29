import React from 'react'

import {useSelector} from 'react-redux'
import { selectPostsById } from './PostsSlice'

import TimeAgo from './TimeAgo'
import { Link, useParams } from 'react-router-dom'


const SinglePostPage = () => {
    //retrieve postIid
    const {postId}= useParams();

    const post = useSelector((state) => selectPostsById(state, Number(postId)))

    if(!post){
        return (
            <section>
                <h2> Post not found!!</h2>
            </section>
        )
    }

  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p className='postCredit'>
            <Link to={`/post/edit/${post.id}`}>Edit</Link>
            <TimeAgo timestamp={post.date}/>
        </p>
    </article>
  )
}


export default SinglePostPage