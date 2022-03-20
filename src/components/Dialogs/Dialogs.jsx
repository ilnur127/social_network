import React from 'react';

import DialogItem from './components/DialogItem/DialogItem'
import Message from './components/Message/Message'
import DialogReduxForm from './components/DialogForm/DialogForm'

import classes from './Dialogs.module.css'

const Dialogs = ({addMessage, dialogsPage}) => {
    const addMessageFunc = (formData) => {
        console.log(formData)
        addMessage(formData.newMessageText)
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsPage.dialogs.map((dialog) => (<DialogItem key={dialog.id} userId={dialog.id} userName={dialog.name} />))}
        </div>
        <div className={classes.messages}>
            {dialogsPage.messages.map((message) => (<Message key={message.id} message={message} />))}
            <div>
                <DialogReduxForm onSubmit={addMessageFunc}/>
            </div>
        </div>
    </div>
}
export default Dialogs
