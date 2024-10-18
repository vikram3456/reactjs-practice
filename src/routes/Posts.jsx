import PostList from "../Components/PostList";
import { Outlet } from "react-router-dom";
function Posts() {
 
  return (

    <>
    <Outlet />
    <main>
      <PostList />
    </main>
    </>
  );
}
;

async function loader() {
  let response = await fetch('http://localhost:8080/posts')
  let resData = await response.json()
  return resData.Posts
}


export default [Posts,loader]