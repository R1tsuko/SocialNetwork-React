import React from 'react';
import ChatsContent from './ChatsContent/ChatsContent';
import classes from './Messages.module.css'
import MessagesContentContainer from './MessagesContent/MessagesContentContainer';

const Messages = (props) => {

  return (
    <div className={classes.messages}>
      <ChatsContent chatsData={props.state.chatsData} />
      <MessagesContentContainer store={props.store} />
    </div>
  );
}

export default Messages;
