import Post from "../../../commonContent/Post/Post"

const Posts = (props) => {

  let PostsArr = props.myPostsData.map((post) => <Post text={post.text}/>)

  return <div>
    {PostsArr}
  </div>
}

export default Posts