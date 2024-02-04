import React from "react";

import { useSelector } from "react-redux";
import { selectPostsById } from "./PostsSlice";

import TimeAgo from "./TimeAgo";
import { Link, useParams } from "react-router-dom";

const SinglePostPage = () => {
  const styles = {
    margin: "0.5em 0.5em 0.5em 0",
    border: " 1px solid rgb(14, 14, 14)",
    borderRadius: " 10px",
    padding: " 1em",
    width: "100% ",
  };
  //retrieve postIid
  const { postId } = useParams();
  console.log("postId:", postId);

  // const post = useSelector((state) => selectPostsById(state, Number(postId)));
  // console.log('post:', post);
  const postState = useSelector((state) => state.posts);
  console.log("postState:", postState);

  const post = postState.list.find((post) => post.id === Number(postId));
  console.log("post:", post);

  if (!post) {
    return (
      <section>
        <h2>Post not found!!</h2>
      </section>
    );
  }

  return (
    <article style={styles}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p className="postCredit">
        <Link to={`/edit/${post.id}`}>Edit</Link>
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  );
};

export default SinglePostPage;
