import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TimeAgo from './TimeAgo'
import { Link } from 'react-router-dom'
import { deleteAll, deleteData } from './PostsSlice'


const PostsList = () => {
  const dispatch = useDispatch();
const postState = useSelector((state) => state.posts);
const {title,content,list} =postState;
// console.log(list);
// console.log(title);
// console.log(content);

// const posts = []
const newPostAtTop = list.slice().sort((a,b)=> b.date.localeCompare(a.date))

//console.log('Posts:', title, content);
const renderedPosts = newPostAtTop.map((post)=> (
  
    <article key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content.substring(0,50)}...</p>
    <p className="postCredit">
      <Link to={`post/${post.id}`}><button className='btn-view'>View Post</button></Link>
      <button className='btn-del' onClick={()=>dispatch(deleteData(post.id))}>Delete</button>
       {/*<Link to='/edit${post.id}'>Edit</Link> */}
      <TimeAgo timestamp={post.date}/>
    </p>
</article>

))

  return (
    <section>
      <Link to='post'><button className='btn-add'>Add New Post</button></Link>
  <button className="btn-del" onClick={()=>dispatch(deleteAll())}>Delete All Post!</button>

   {renderedPosts}
   {/* <h3>{title}</h3>
    <p>{content}</p>*/}
    </section> 
  )
}

export default PostsList