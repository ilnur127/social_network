import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    return <header className={classes.header}>
        <img alt='logo' src='/app-store.png'/>
        <div className={classes.loginBlock}>
            {props.isAuth ?
                <>
                    <span>{props.login}</span>
                    <button onClick={props.logout}>Logout</button>
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
