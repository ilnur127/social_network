import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = ({userId, userName}) => {
    return <div className={classes.dialog}>
        <img src='/userLogo.png' className={classes.dialogImg}/>
        <NavLink to={`/dialogs/${userId}`} activeClassName={classes.active}>{userName}</NavLink>
    </div>
}

export default DialogItem