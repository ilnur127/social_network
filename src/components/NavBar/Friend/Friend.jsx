import classes from './Friend.module.css'

const Friend = (props) => {
    return <div>
        <div>
            <img src='/userLogo.png' className={classes.friendImg}/>
        </div>
        <div className={classes.friendName}>
            {props.friend.name}
        </div>
    </div>
}

export default Friend