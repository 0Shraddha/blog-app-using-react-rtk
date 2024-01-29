import React from 'react'
import TimeAgo from './TimeAgo'
import { Link } from 'react-router-dom'


const PostsExcerpt = ({post}) => {
  return (
    <article>
    <h3>{post.title}</h3>
    <p> {post.body.substring(0,75)}...</p>
    <p>{post.body.substring(0,100)}</p>
    <p className="postCredit">
      <Link to={`post/${post.id}`}>View Post</Link>
      <TimeAgo timestamp={post.date}/>
    </p>
</article>
  )
} 

export default PostsExcerpt