import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return <div className={classes.dialog}>
        <img src='/userLogo.png' className={classes.dialogImg}/>
        <NavLink to={`/dialogs/${props.userId}`} activeClassName={classes.active}>{props.userName}</NavLink>
    </div>
}

export default DialogItem