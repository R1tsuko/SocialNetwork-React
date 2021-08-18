import Chat from './../Chat/Chat';
import classes from './../Messages.module.css'

const ChatsContent = (props) => {

  let ChatsArr = props.chatsData.map((chat) => <Chat id={chat.id} name={chat.name} />)

  return (
    <div className={classes.chats}>
      {ChatsArr}
    </div>
  );
}

export default ChatsContent;
