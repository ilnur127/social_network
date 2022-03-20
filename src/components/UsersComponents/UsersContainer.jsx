import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { getUsersThunkCreator, onFolowThunkCreator, onUnfolowThunkCreator } from '../../redux/usersReducer'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelector";
import Loader from "../ui/Loader/Loader";
import Users from "./Users";

function UsersComponent({currentPage, pageSize, getUsers, isFetching, totalUsersCount, users, onFolow, onUnfolow, followingInProgress}) {
    const getUsersFunc = async (page = null, changePage = false) => {
        getUsers(page || currentPage, pageSize, changePage);
    }
    const onPageChanged = (page) => {
        this.getUsers(page, true)
    }
    useEffect(() => {getUsersFunc()}, [])
    return (
        <>
            { isFetching ? 
                <Loader />
            : <Users
                pagesCount={Math.ceil(totalUsersCount / pageSize)}
                users={users}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                onFollow={onFolow}
                onUnfollow={onUnfolow}
                followingInProgress={followingInProgress}
            />
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
})

export default compose(connect(mapStateToProps, {
    getUsers: getUsersThunkCreator,
    onFolow: onFolowThunkCreator,
    onUnfolow: onUnfolowThunkCreator
}))(UsersComponent)