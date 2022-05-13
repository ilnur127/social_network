import { ProfileApi } from "../utils/api/api"
import { ProfileType, PostType, PhotosType } from "../types/types"
const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS'


const initialState = {
    profile: null as ProfileType | null,
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
    ] as Array<PostType>,
    status: ''
}
type InitialStateType = typeof initialState

type AddPostACActionType = {
    type: typeof ADD_POST,
    newText : string
}
export const addPostAC = (newText : string) : AddPostACActionType => ({
    type : ADD_POST,
    newText
})

type DeletePostACActionType = {
    type: typeof DELETE_POST,
    id : number
}
export const deletePostAC = (id : number) : DeletePostACActionType => ({
    type : DELETE_POST,
    id
})

type SetUserProfileACActionType = {
    type: typeof SET_USER_PROFILE,
    profile : ProfileType
}
export const setUserProfileAC = (profile: ProfileType) : SetUserProfileACActionType =>({
    type: SET_USER_PROFILE,
    profile
})

type SetStatusACActionType = {
    type: typeof SET_STATUS,
    status : string
}
export const setStatusAC = (status: string) : SetStatusACActionType =>({
    type: SET_STATUS,
    status
})

type SetPhotoSuccessACActionType = {
    type: typeof SET_PHOTO_SUCCESS,
    photos : PhotosType
}
export const setPhotoSuccessAC = (photos : PhotosType) : SetPhotoSuccessACActionType =>({
    type: SET_PHOTO_SUCCESS,
    photos
})

export const getUserInfoThunkCreator = (userId : number) => async (dispatch : any) => {
    const data = await ProfileApi.apiGetUserInfo(userId)
    dispatch(setUserProfileAC(data))
}
export const getStatusThunkCreator = (userId : number) => async (dispatch : any) => {
    const data = await ProfileApi.apiGetStatus(userId)
    dispatch(setStatusAC(data))
}
export const updateStatusThunkCreator = (status : string) => async (dispatch : any) => {
    const data = await ProfileApi.apiUpdateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhotoThunkCreator = (file : any) => async (dispatch : any) => {
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
    }
}

export const addPostThunk = (text : string) => async (dispatch : any) => {
    dispatch(addPostAC(text))
}

const profileReducer = (state = initialState, action: any) : InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {...state,
                posts : [...state.posts, {
                    id: state.posts.length + 1,
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
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default : {
            return state
        }
    }
}
export default profileReducer
