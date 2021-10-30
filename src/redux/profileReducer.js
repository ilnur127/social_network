const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {
            id: 1,
            text: 'Hi',
            likes: 10
        },
        {
            id: 2,
            text: 'I am Ilnur',
            likes: 20
        }
    ],
    newPostText: ''
}
export const addPostActionCreator = () => ({
    type : ADD_POST
})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
})

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({
                id: state.posts + 1,
                text: state.newPostText,
                likes: 0
            })
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
        default:
            console.log("Нет таких action");
            break;
    }
    return state
}
export default profileReducer
