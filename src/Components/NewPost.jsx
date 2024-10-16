import classes from './NewPost.module.css';
import { useState } from "react";
function NewPost({ onCancel, onAddPost }) {

  const [submitedValue, updateSubmitedValue] = useState({ name: '', body: '' })


  function changeBodyHandler(event) {
    updateSubmitedValue((prevState) => {
      return { ...prevState, body: event.target.value }
    })
  }
  function changeNameHandler(event) {
    updateSubmitedValue((prevState) => {
      return { ...prevState, name: event.target.value }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      name: submitedValue.name,
      body: submitedValue.body
    }
    onAddPost(postData)
    onCancel()
  }
  return (
    <form className={classes.form} onSubmit = {submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;