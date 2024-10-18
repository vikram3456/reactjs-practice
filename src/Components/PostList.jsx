import Post from "./Post";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import classes from "./PostsList.module.css"

function PostList() {
  const posts = useLoaderData();
  
  function addingPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPosts((existingPosts) => [...existingPosts, postData])
  }
  return (
    <>
      {posts.length > 0 &&
        <ul className={classes.posts}>
          {posts.map((post) => <Post key={post.name} author={post.name} body={post.body} />)}
        </ul>}
      {posts.length === 0  &&
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>no posts to show</p>
        </div>}
      
    </>
  );
}

export default PostList;
