import classes from './Profile.module.css'
import BackgroundImage from './BackgroundImage/BackgroundImage'
import NewPostContainer from './MyPosts/NewPost/NewPostContainer'
import PostsContainer from './MyPosts/Posts/PostsContainer'
import ProfileDescriptionContainer from './ProfileDescription/ProfileDescriptionContainer'

const Profile = (props) => {

  return <div className='profile'>
    <BackgroundImage />
    <ProfileDescriptionContainer />
    <NewPostContainer />
    <PostsContainer />
  </div>
}

export default Profile