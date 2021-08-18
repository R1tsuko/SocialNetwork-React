import { connect } from 'react-redux';
import Posts from './Posts';


const mapStateToProps = (state) => ({ myPostsData: state.profilePage.myPostsData })
const mapDispatchToProps = (dispatch) => ({ })


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;