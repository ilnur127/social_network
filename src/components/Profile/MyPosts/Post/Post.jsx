import classes from './Post.module.css'
const Post = (props) => {
    return <div className={classes.item}>
        <img src="/UserLogo.png" alt="" />
        <div>{props.messageText}</div>
        <div>{props.likes} Likes</div>
        <button>Like</button>
    </div>
}
export default Post
