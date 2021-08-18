import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../../../redux/reducers/profileReducer';
import NewPost from './NewPost'


const mapStateToProps = (state) => ({ newPostText: state.profilePage.newPostText })
const mapDispatchToProps = (dispatch) => ({
  addPost() { dispatch(addPostCreator()); },
  updateNewPostText(newText) { dispatch(updateNewPostTextCreator(newText)); },
})


const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;