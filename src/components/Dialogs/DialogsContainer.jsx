import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReduser'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})
const mapDispatchToProps = (dispatch) => ({
    onMessageChange : (text) => {
        dispatch(updateNewMessageTextActionCreator(text))
    },
    addMessage : () => {
        dispatch(addMessageActionCreator())
    }
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer
