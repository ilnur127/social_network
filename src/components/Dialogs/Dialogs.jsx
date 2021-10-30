import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReduser'

const Dialogs = (props) => {
    const newMessage = React.createRef()

    const onMessageChange = () => {
        const text = newMessage.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {props.dialogs.map((dialog) => (<DialogItem key={dialog.id} userId={dialog.id} userName={dialog.name} />))}
        </div>
        <div className={classes.messages}>
            {props.messages.map((message) => (<Message key={message.id} message={message} />))}
            <div>
                <textarea
                    ref={newMessage}
                    value={props.newMessageText}
                    onChange={onMessageChange}
                />
                <button
                    onClick={ addMessage }
                >Send</button>
            </div>
        </div>
    </div>
}
export default Dialogs
