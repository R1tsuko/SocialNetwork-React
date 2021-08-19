import classes from './Header.module.css'
import HeaderAuthContainer from './HeaderAuth/HeaderAuthContainer'

const Header = () => {
    return <header className={classes.header}>
        <HeaderAuthContainer />
    </header>
}

export default Header