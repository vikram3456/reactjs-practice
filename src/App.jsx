import MainHeader from "./Components/MainHeader";
import PostList from "./Components/PostList";
import { useState } from "react";

function App() {
  const [modelIsVisable, setModelIsVisable] = useState(false)

  function closeModelHandler (event){
    setModelIsVisable(false)
  }
  function showModelHandler (event){
    setModelIsVisable(true)
  }
  return (

    <>
    <MainHeader onCreatePost = {showModelHandler}/>
    <main>
      <PostList isPosting = {modelIsVisable} onStopPosting = {closeModelHandler}/>
    </main>
    </>
  );
}

export default App;
