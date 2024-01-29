
import TimeAgo from './TimeAgo'
import {Link} from 'react-router-dom'

import React from 'react'

const PostsExcerpt = ({post}) => {
  return (
     <article>
        <h3>{post.title}</h3>
        <p className='excerpt'>{post.body.substring(0,75)}...</p>
        <p className='postCredit'>
            <Link to={'post/${post.id}'}>View post</Link>
            <TimeAgo timestamp={post.date}/>
        </p>

     </article>
  )
}

export default PostsExcerpt