import { ProfileApi } from "../utils/api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
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
const addPostAC = (newText) => ({
    type : ADD_POST,
    newText
})

const setUserProfileAC = (profile) =>({
    type: SET_USER_PROFILE,
    profile
})
const setStatusAC = (status) =>({
    type: SET_STATUS,
    status
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default : {
            return state
        }
    }
}
export default profileReducer
