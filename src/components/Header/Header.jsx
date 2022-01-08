import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    return <header className={classes.header}>
        <img alt='logo' src='/app-store.png'/>
        <div className={classes.loginBlock}>
            {props.isAuth ?
                props.login
            :    
                <NavLink to='/login'>
                    login
                </NavLink>
            }
        </div>
    </header>
}

export default Header
