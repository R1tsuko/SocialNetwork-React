import { connect } from 'react-redux';
import { sendMessageCreator, updateMessagesTextCreator } from '../../../../redux/reducers/messagesReducer';
import MessagesContent from './MessagesContent';


const mapStateToProps = (state) => ({ messagesData: state.messagesPage.messagesData, messageText: state.messagesPage.messageText, })
const mapDispatchToProps = (dispatch) => ({
  sendMessage() { dispatch(sendMessageCreator()); },
  updateMessageText(text) { dispatch(updateMessagesTextCreator(text)); },
})

const MessagesContentContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContent);

export default MessagesContentContainer;
