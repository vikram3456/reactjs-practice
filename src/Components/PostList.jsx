import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css"
function PostList() {
  return (
    <>
    <NewPost/>
    <ul className = {classes.posts}>
    <Post author="trivikram" body="this is the test"/>
    <Post author="vikram" body="this is test 2"/>
    </ul>
    </>
  );
}

export default PostList;
