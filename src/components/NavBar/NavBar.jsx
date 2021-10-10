import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import Friend from './Friend/Friend'

const NavBar = (props) => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
        </div>
        <div className={classes.friendsBlock}>
            <div>Friends</div>
            <div className={classes.friends}>
                {props.friends.map((friend) => <Friend key={friend.id} friend={friend}/>)}
            </div>
        </div>
    </nav>
}
export default NavBar
