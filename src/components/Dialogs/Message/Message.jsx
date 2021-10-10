import classes from './Message.module.css'
const Message = (props) => {
    return <div className={`${classes.message} ${(props.message.meMessage === true) ? classes.meMessage : ''}`}>
        <img src="/userLogo.png" className={classes.messageImg}/>
        <div className={classes.messageText}>{props.message.text}</div>
    </div>
}
export default Message