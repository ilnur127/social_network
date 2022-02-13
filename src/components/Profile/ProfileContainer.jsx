
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addPostThunk, getUserInfoThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profileReducer'
import Profile from './Profile'
import Loader from '../ui/Loader/Loader'
import { withAuthRedirect } from '../../hoc/ThisAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.userId
        if (!userId) {
            this.props.history.push('/login')
        }
        this.props.getUserInfo(userId)
        this.props.getUserStatus(userId)
    }
    render = () => (
        <>
            {!this.props.profile ?
                <Loader />
            :
                <Profile {...this.props}/>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostsText: state.profilePage.newPostsText,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {
        getUserInfo: getUserInfoThunkCreator,
        getUserStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator,
        addPost: addPostThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)