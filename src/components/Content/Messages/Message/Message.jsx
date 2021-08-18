import classes from './Message.module.css'

const Message = (props) => {
  return (
    <div className = {props.isMine ? classes.myMessage : classes.notMyMessage}>
        {props.text}
    </div>
  );
}

export default Message;
