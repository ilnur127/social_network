import React from 'react'

import ProfileStatus from './components/ProfileStatus/ProfileStatus'

import classes from './ProfileInfo.module.css'
const ProfileInfo = ({photos, fullName, lookingForAJob, lookingForAJobDescription, aboutMe, status, updateStatus, contacts, isOwner, savePhoto}) => {
    const changeMainPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div className={classes.decriptionBlock}>
            <div className={classes.info}>
                <div className={classes.avatarBlock}>
                    <img alt="userLogo" width='96px' src={photos.small || "/userLogo.png"}/>
                    {
                        isOwner ?
                            <input type='file' onChange={changeMainPhoto}/>
                        : null
                    }
                </div>
                <div className={classes.mainInfo}>
                    <div>{fullName}</div>
                    {lookingForAJob ?
                        <div className={classes.findJobBlock}>
                            <div>Ищет работу</div>
                            <div>Комментарий для работотаделя: {lookingForAJobDescription}</div>
                        </div>
                    : null
                    }
                </div>
            </div>
            <div>
                <div>Описание</div>
                <div>{aboutMe}</div>
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <div className={classes.contacts}>
                <div>Контакты</div>
                {Object.entries(contacts).filter((contact) => contact[1]).map((contact, index) => (
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