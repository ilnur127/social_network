import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    profilePage : state.profilePage
})

const mapDispatchToProps = (dispatch) => ({
    updateNewPostText : (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    },
    addPost : () => {
        dispatch(addPostActionCreator())
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
