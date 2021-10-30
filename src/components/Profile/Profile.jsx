import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts} dispatch={props.dispatch}/>
    </div>
}
export default Profile
