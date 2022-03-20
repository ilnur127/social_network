import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({profile, status, updateStatus, posts, newPostText, updateNewPostText, addPost, savePhoto, isOwner}) => {
    return <div>
        <ProfileInfo {...profile} status={status} updateStatus={updateStatus} savePhoto={savePhoto} isOwner={isOwner}/>
        <MyPosts
            posts={posts}
            newPostText={newPostText}
            updateNewPostText={updateNewPostText}
            addPost={addPost}
        />
    </div>
}
export default Profile
