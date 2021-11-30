import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    const newPostElement = React.createRef()
    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    const addPost = () => {
        props.addPost()
    }
    return <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.newPostBlock}>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <button
                    onClick={ addPost }
                >App post</button>
            </div>
            <div className="posts">
                {props.posts.map((post) => (<Post key={post.id} messageId={post.id} messageText={post.text} likes={post.likes} />))}
            </div>
        </div>
}
export default MyPosts
