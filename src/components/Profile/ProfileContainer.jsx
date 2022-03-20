
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addPostThunk, getUserInfoThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhotoThunkCreator } from '../../redux/profileReducer'
import Profile from './Profile'
import Loader from '../ui/Loader/Loader'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.userId
        if (!userId) {
            this.props.history.push('/login')
        }
        this.props.getUserInfo(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }
    render = () => (
        <>
            {!this.props.profile ?
                <Loader />
            :
                <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
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
        addPost: addPostThunk,
        savePhoto: savePhotoThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)