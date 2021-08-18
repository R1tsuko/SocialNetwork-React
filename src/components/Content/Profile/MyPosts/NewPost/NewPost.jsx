const NewPost = (props) => {

  const onUpdateNewPostText = (e) => {
    props.updateNewPostText(e.target.value);
  }

  const onAddPost = () => {
    props.addPost();
  }

  return <div>
    <textarea
      value={props.newPostText}
      onChange={onUpdateNewPostText}></textarea>
    <div><button onClick={onAddPost}>Add post</button></div>
  </div>
}

export default NewPost