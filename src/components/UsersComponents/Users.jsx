import React from "react";
import { NavLink } from "react-router-dom";

import Paggination from "../ui/Paggination/Paggination";

import classes from './Users.module.css'
function User({user, followClick, unfollowClick, followingInProgress}) {
    return (
        <NavLink to={'/profile/' + user.id} className={classes.userContent}>
            <div className={classes.userHeader}>
                <div className={classes.userAvatar}>
                    <img
                        src={user.photos.small || "https://herrmans.eu/wp-content/uploads/2019/01/765-default-avatar.png"}
                        width='50px'
                        alt='Фото пользователя'
                    />
                </div>
                <div className={classes.userFollowed}>
                    {user.followed ?
                        <button
                            onClick={unfollowClick}
                            disabled={followingInProgress.some(id => id === user.id)}
                        >Unfollow</button>
                    :
                        <button
                            onClick={followClick}
                            disabled={followingInProgress.some(id => id === user.id)}
                        >Follow</button>
                    }
                </div>
            </div>
            <div className={classes.userInfo}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status || 'happy'}</div>
                </div>
                <div>
                    <div>{user.location?.city || 'city'}</div>
                    <div>{user.location?.country || 'country'}</div>
                </div>
            </div>
        </NavLink>
    )
}
export default function Users({users, onUnfollow, followingInProgress, onFollow, currentPage, pagesCount, onPageChanged}) {
    return ( <div>
        {users.map((user) => (
            <User
                key={user.id}
                user={user}
                unfollowClick={(event) => {
                    event.preventDefault()
                    onUnfollow(user.id)
                }}
                followClick={(event) => {
                    event.preventDefault()
                    onFollow(user.id)
                }}
                followingInProgress={followingInProgress}
            />
        ))}
        <Paggination
            activePage={currentPage}
            pagesCount={pagesCount}
            changePageHandle={onPageChanged}
        />
    </div>)
}
