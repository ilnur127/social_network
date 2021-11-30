import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReduser'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'
const DialogsContainer = () => {
    return (
      <StoreContext.Consumer>
      {
        (store) => {
            debugger
            let state = store.getState()
            const onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text))
            }
            const addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }
            return (<Dialogs
              dialogs={state.dialogsPage.dialogs}
              messages={state.dialogsPage.messages}
              newMessageText={state.dialogsPage.newMessageText}
              onMessageChange={onMessageChange}
              addMessage={addMessage}
            />)
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer
