import NewPost from "./NewPost";
import Post from "./Post";
import Model from "./Model";
import { useState } from "react";
import classes from "./PostsList.module.css"
function PostList({onStopPosting,isPosting}) {
  const [submitedvalue, updateSubmitedValue] = useState({name:'',body:''})


function changeBodyHandler (event){
  updateSubmitedValue((prevState)=>{
    return {...prevState,body: event.target.value}
  })
}
function changeNameHandler (event){
  updateSubmitedValue((prevState)=>{
    return {...prevState,name:event.target.value}
  })
}

  return (
    <>
    {isPosting && <Model onClose = {onStopPosting}>
    <NewPost 
    onBodyChange = {changeBodyHandler} 
    onNameChange = {changeNameHandler}/>
    </Model>}
    <ul className={classes.posts}>
    <Post author={submitedvalue.name} body={submitedvalue.body}/>
    <Post author="vikram" body="this is test 2"/>
    </ul>
    </>
  );
}

export default PostList;
