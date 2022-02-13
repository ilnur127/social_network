import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) => {
    return <div>
        <ProfileInfo {...props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPosts
            posts={props.posts}
            newPostText={props.newPostText}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost}
        />
    </div>
}
export default Profile
