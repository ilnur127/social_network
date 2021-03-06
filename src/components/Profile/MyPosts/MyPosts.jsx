import React, { memo } from 'react';

import Post from './components/Post/Post'
import NewPostReduxForm from './components/NewPostForm/NewPostForm'

import classes from './MyPosts.module.css'

const MyPosts = memo(({addPost, posts}) => {
    console.log("Render")
    const addPostFunc = (formData) => {
        addPost(formData.newPostText)
    }
    return <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.newPostBlock}>
                <NewPostReduxForm onSubmit={addPostFunc}/>
            </div>
            <div className="posts">
                {posts.map((post) => (<Post key={post.id} messageId={post.id} messageText={post.text} likes={post.likes} />))}
            </div>
        </div>
})
export default MyPosts
