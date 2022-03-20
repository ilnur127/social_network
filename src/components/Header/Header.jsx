import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = ({isAuth, login, logout}) => {
    return <header className={classes.header}>
        <img alt='logo' src='/app-store.png'/>
        <div className={classes.loginBlock}>
            {isAuth ?
                <>
                    <span>{login}</span>
                    <button onClick={logout}>Logout</button>
                </>
            :    
                <NavLink to='/login'>
                    login
                </NavLink>
            }
        </div>
    </header>
}

export default Header
