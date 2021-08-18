import classes from './Friend.module.css'

const Friend = (props) => {
    return (<div className={classes.friend}>
        <div><img src={props.imgsrc}></img></div>
        <div className = {classes.friendName}>{props.name}</div>
    </div>)
}

export default Friend