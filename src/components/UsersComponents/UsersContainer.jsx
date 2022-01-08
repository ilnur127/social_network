import React from "react";
import { connect } from "react-redux";

import { getUsersThunkCreator, onFolowThunkCreator, onUnfolowThunkCreator } from '../../redux/usersReducer'
import Loader from "../ui/Loader/Loader";
import Users from "./Users";

class UsersComponent extends React.Component {
    getUsers = async (page = null, changePage = false) => {
        this.props.getUsers(page || this.props.currentPage, this.props.pageSize, changePage);
    }
    onPageChanged = (page) => {
        this.getUsers(page, true)
    }
    componentDidMount() {
        this.getUsers()
    }
    render = () => {
        return (
            <>
                { this.props.isFetching ? 
                    <Loader />
                : <Users
                    pagesCount={Math.ceil(this.props.totalUsersCount / this.props.pageSize)}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    onFollow={this.props.onFolow}
                    onUnfollow={this.props.onUnfolow}
                    followingInProgress={this.props.followingInProgress}
                />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})

export default connect(mapStateToProps, {
    getUsers: getUsersThunkCreator,
    onFolow: onFolowThunkCreator,
    onUnfolow: onUnfolowThunkCreator
})(UsersComponent)