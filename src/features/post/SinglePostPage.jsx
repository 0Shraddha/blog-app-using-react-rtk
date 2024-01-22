import React from 'react'

import {useSelector} from 'react-redux'
import { selectPostsById } from './PostsSlice'

import TimeAgo from './TimeAgo'


const SinglePostPage = () => {

    const post = useSelector((state) => selectPostsById(state, postId))

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
            <TimeAgo timestamp={post.date}/>
        </p>
    </article>
  )
}


export default SinglePostPage