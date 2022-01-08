
import React from 'react'
import { connect } from 'react-redux'

import { addPostThunk, getUserInfoThunkCreator, updateNewPostTextAC } from '../../redux/profileReducer'
import Profile from './Profile'
import Loader from '../ui/Loader/Loader'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserInfo()
    }
    render = () => (<>
        {!this.props.profile ?
            <Loader />
        :
            <Profile {...this.props}/>
        }
    </>)
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostsText: state.profilePage.newPostsText
})
export default connect(mapStateToProps, {
    getUserInfo: getUserInfoThunkCreator,
    updateNewPostText: updateNewPostTextAC,
    addPost: addPostThunk
})(withRouter(ProfileContainer))
