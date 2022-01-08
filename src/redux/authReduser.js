import { AuthApi } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
})

export const authUserThunk = () => async (dispatch) => {
    const data = await AuthApi.apiAuthMe()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login))
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default : {
            return state
        }
    }
}
export default authReducer
