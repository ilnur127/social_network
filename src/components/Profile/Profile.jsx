import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
}
export default Profile
