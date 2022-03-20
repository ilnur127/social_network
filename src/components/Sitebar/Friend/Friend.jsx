import classes from './Friend.module.css'

const Friend = ({friend}) => {
    return <div>
        <div>
            <img src='/userLogo.png' className={classes.friendImg}/>
        </div>
        <div className={classes.friendName}>
            {friend.name}
        </div>
    </div>
}

export default Friend