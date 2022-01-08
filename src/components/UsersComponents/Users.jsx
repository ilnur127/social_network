import React from "react";
import { NavLink } from "react-router-dom";

import Paggination from "../ui/Paggination/Paggination";

import classes from './Users.module.css'

export default function Users(props) {
    return ( <div>
        {props.users.map((user) => (
            <NavLink key={user.id} to={'/profile/' + user.id} className={classes.userContent}>
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
                                onClick={(event) => {
                                    event.preventDefault()
                                    props.onUnfollow(user.id)
                                }}
                                disabled={props.followingInProgress.some(id => id === user.id)}
                            >Unfollow</button>
                        :
                            <button
                                onClick={(event) => {
                                    event.preventDefault()
                                    props.onFollow(user.id)
                                }}
                                disabled={props.followingInProgress.some(id => id === user.id)}
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
        ))}
        <Paggination
            activePage={props.currentPage}
            pagesCount={props.pagesCount}
            changePageHandle={props.onPageChanged}
        />
    </div>)
}
