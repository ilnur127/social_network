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
        case ADD_POST: {
            const newState = {...state, 
                posts : [...state.posts], 
                newPostText : ''
            }
            newState.posts.push({
                id: state.posts + 1,
                text: state.newPostText,
                likes: 0
            })
            return newState
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText : action.newText}
        }
        default : {
            return state
        }
    }
}
export default profileReducer
