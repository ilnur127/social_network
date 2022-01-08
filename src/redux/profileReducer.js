import { UsersApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const initialState = {
    profile: null,
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
const addPostAC = () => ({
    type : ADD_POST
})
export const updateNewPostTextAC = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
})

const setUserProfileAC = (profile) =>({
    type: SET_USER_PROFILE,
    profile
})

export const getUserInfoThunkCreator = (userId) => async (dispatch) => {
    const data = await UsersApi.apiGetUserInfo(userId || '2')
    dispatch(setUserProfileAC(data))
}

export const addPostThunk = async (dispatch) => {
    dispatch(addPostAC())
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {...state,
                newPostText : '',
                posts : [...state.posts, {
                    id: state.posts + 1,
                    text: state.newPostText,
                    likes: 0
                }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText : action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default : {
            return state
        }
    }
}
export default profileReducer
