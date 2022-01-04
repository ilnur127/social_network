import React from "react";
import UsersComponent from './Users'
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer'

const mapStateToProps = (state) => ({
    users: state.usersPage.users
})

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)