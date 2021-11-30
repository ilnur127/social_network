import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {
    return (
    <StoreContext.Consumer>
    {
    (store) => {
        let state = store.getState()
        const onPostChange = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text))
        }
        const addPost = () => {
            store.dispatch(addPostActionCreator())
        }
        return (<MyPosts
           posts={state.profilePage.posts}
           newPostText={state.profilePage.newPostText}
           updateNewPostText={onPostChange}
           addPost={addPost}
        />)
    }
}
    </StoreContext.Consumer>
    )
}
export default MyPostsContainer
