import { NavLink } from 'react-router-dom'
import Friend from './Friend/Friend'
import classes from './Navbar.module.css'

const Navbar = (props) => {

    let friendArr = props.state.friendsData.map((friend) => <Friend imgsrc={friend.imgsrc} name={friend.name} />)

    return (<div className={classes.sidebar}>
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}> Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/messages' activeClassName={classes.active}> Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}> Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}> News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}> Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}> Settings</NavLink>
            </div>
        </nav>
        <div className={classes.friends}>
            <div className={classes.friendsTitle}>friends</div>
            <div>
                {friendArr}
            </div>
        </div>
    </div>)
}

export default Navbar