import { ProfileApi } from "../utils/api/api"

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS'
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
    status: ''
}
export const addPostAC = (newText) => ({
    type : ADD_POST,
    newText
})
export const deletePostAC = (id) => ({
    type : DELETE_POST,
    id
})

export const setUserProfileAC = (profile) =>({
    type: SET_USER_PROFILE,
    profile
})
export const setStatusAC = (status) =>({
    type: SET_STATUS,
    status
})
export const setPhotoSuccessAC = (photos) =>({
    type: SET_PHOTO_SUCCESS,
    photos
})

export const getUserInfoThunkCreator = (userId) => async (dispatch) => {
    const data = await ProfileApi.apiGetUserInfo(userId)
    dispatch(setUserProfileAC(data))
}
export const getStatusThunkCreator = (userId) => async (dispatch) => {
    const data = await ProfileApi.apiGetStatus(userId)
    dispatch(setStatusAC(data))
}
export const updateStatusThunkCreator = (status) => async (dispatch) => {
    const data = await ProfileApi.apiUpdateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhotoThunkCreator = (file) => async (dispatch) => {
    try {
        const data = await ProfileApi.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(setPhotoSuccessAC(data.data.photos))
        } else {
            const error = new Error(data.message)
            throw error
        }
    } catch (error) {
        console.error(error)
        alert(error.message)
    }
}

export const addPostThunk = (text) => async (dispatch) => {
    dispatch(addPostAC(text))
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {...state,
                posts : [...state.posts, {
                    id: state.posts + 1,
                    text: action.newText,
                    likes: 0
                }]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SET_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default : {
            return state
        }
    }
}
export default profileReducer
