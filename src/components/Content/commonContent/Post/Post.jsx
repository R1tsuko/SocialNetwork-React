import classes from './Post.module.css'

const Post = (props) => {
  return <div className={classes.post}>
      {props.text}
      <div>
        <span>Like</span>
      </div>
  </div>
}

export default Post