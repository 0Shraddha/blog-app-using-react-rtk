import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

const PostsList = () => {
const posts = useSelector(selectAllPosts)
const renderedPosts = posts.map(post => (
    <article key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content.substring(0,150)} ... <u>Read more</u></p>
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