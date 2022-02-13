import { stopSubmit } from "redux-form"
import { AuthApi } from "../utils/api/api"

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
        isAuth
    }
})

export const authUserThunk = () => async (dispatch) => {
    const data = await AuthApi.apiAuthMe()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    return data
}

export const loginThunkCreater = (formData) => async (dispatch) => {
    const data = await AuthApi.login(formData)
    if (data.resultCode === 0) {
        dispatch(authUserThunk())
    } else {
        dispatch(stopSubmit('login', {_error: data.messages}))
    }
}

export const logoutThunkCreater = () => async (dispatch) => {
    const data = await AuthApi.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default : {
            return state
        }
    }
}
export default authReducer
