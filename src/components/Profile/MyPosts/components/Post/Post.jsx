import classes from './Post.module.css'
const Post = ({messageText, likes}) => {
    return <div className={classes.item}>
        <img src="/UserLogo.png" alt="" />
        <div>{messageText}</div>
        <div>{likes} Likes</div>
        <button>Like</button>
    </div>
}
export default Post
