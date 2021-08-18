import { NavLink } from "react-router-dom"


const Chat = (props) => {
  return (
    <div>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default Chat;
