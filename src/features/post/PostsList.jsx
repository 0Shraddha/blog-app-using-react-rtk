import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './PostsSlice'
import TimeAgo from './TimeAgo'


const PostsList = () => {
const posts = useSelector(selectAllPosts);
const newPostAtTop = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

const renderedPosts = newPostAtTop.map(post => (
    <article key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content.substring(0,100)}</p>
    <p className="postCredit">
      <TimeAgo timestamp={post.date}/>
    </p>
</article>
))

  return (
    <section>
   <h2>Blog Posts</h2>
   {renderedPosts}
    </section>
  )
}

export default PostsList