import React from 'react'

import ProfileStatus from './components/ProfileStatus/ProfileStatus'

import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return <div>
        {/* <div>
            <img alt="profileBG" src="beach.png" className={classes.img}/>
        </div> */}
        <div className={classes.decriptionBlock}>
            <div className={classes.info}>
                <img alt="userLogo" src={props.photos.small || "/userLogo.png"}/>
                <div className={classes.mainInfo}>
                    <div>{props.fullName}</div>
                    {props.lookingForAJob ?
                        <div className={classes.findJobBlock}>
                            <div>Ищет работу</div>
                            <div>Комментарий для работотаделя: {props.lookingForAJobDescription}</div>
                        </div>
                    : null
                    }
                </div>
            </div>
            <div>
                <div>Описание</div>
                <div>{props.aboutMe}</div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={classes.contacts}>
                <div>Контакты</div>
                {Object.entries(props.contacts).filter((contact) => contact[1]).map((contact, index) => (
                    <div key={index} className={classes.contact}>
                        <div>{contact[0]}:</div>
                        <div>{contact[1]}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default ProfileInfo