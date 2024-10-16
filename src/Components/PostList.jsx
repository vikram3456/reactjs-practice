import NewPost from "./NewPost";
import Post from "./Post";
import Model from "./Model";
import { useEffect, useState } from "react";
import classes from "./PostsList.module.css"

function PostList({ onStopPosting, isPosting }) {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState()
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      let response = await fetch('http://localhost:8080/posts')
      let resPost = await response.json()
      setPosts(resPost.posts)
      setIsFetching(false)
    }
    fetchPosts();
  }, [])
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
      {isPosting && <Model onClose={onStopPosting}>
        <NewPost
          onCancel={onStopPosting}
          onAddPost={addingPostHandler} />
      </Model>}
      {(posts.length > 0 && !isFetching) &&
        <ul className={classes.posts}>
          {posts.map((post) => <Post key={post.name} author={post.name} body={post.body} />)}
        </ul>}
      {(posts.length === 0 && !isFetching) &&
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>no posts to show</p>
        </div>}
      {isFetching && <div style={{ textAlign: 'center', color: 'white' }}>
        <p>... loading posts</p>
      </div>}
    </>
  );
}

export default PostList;
