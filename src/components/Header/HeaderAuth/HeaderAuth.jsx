import { NavLink } from 'react-router-dom'
import classes from './HeaderAuth.module.css'

const HeaderAuth = (props) => {
    return <div className={classes.headerAuth}>
        {
        props.isAuth ? props.login :
            <NavLink to='/login'>sign in</NavLink>
        }
    </div>
}

export default HeaderAuth