import React from 'react';

import DialogItem from './components/DialogItem/DialogItem'
import Message from './components/Message/Message'
import DialogReduxForm from './components/DialogForm/DialogForm'

import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    const addMessage = (formData) => {
        console.log(formData)
        props.addMessage(formData.newMessageText)
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {props.dialogsPage.dialogs.map((dialog) => (<DialogItem key={dialog.id} userId={dialog.id} userName={dialog.name} />))}
        </div>
        <div className={classes.messages}>
            {props.dialogsPage.messages.map((message) => (<Message key={message.id} message={message} />))}
            <div>
                <DialogReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    </div>
}
export default Dialogs
