import classes from './Message.module.css'
const Message = ({message}) => {
    return <div className={`${classes.message} ${(message.meMessage === true) ? classes.meMessage : ''}`}>
        <img src="/userLogo.png" className={classes.messageImg}/>
        <div className={classes.messageText}>{message.text}</div>
    </div>
}
export default Message