import Message from './../Message/Message';
import classes from './../Messages.module.css'

const MessagesContent = (props) => {

  let MessagesArr = props.messagesData.map((mess) => <Message text={mess.text} isMine={mess.isMine} />)

  let onSendMessage = (e) => {
    props.sendMessage();
  }

  let onUpdateMessageText = (e) => {
    props.updateMessageText(e.target.value);
  }

  return (
    <div className={classes.messagesContent}>
      {MessagesArr}
      <div className={classes.newMessage}>
        <textarea
          value={props.messageText}
          onChange={onUpdateMessageText}></textarea>
        <div>
          <button onClick={onSendMessage}>send</button>
        </div>
      </div>
    </div>
  );
}

export default MessagesContent;
