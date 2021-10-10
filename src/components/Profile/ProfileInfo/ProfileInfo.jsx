import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return <div>
        <div>
            <img src="beach.png" className={classes.img}/>
        </div>
        <div className={classes.decriptionBlock}>
            <div>
                <img src="/userLogo.png"/>
            </div>
            <div>
                Description
            </div>
        </div>
    </div>
}

export default ProfileInfo