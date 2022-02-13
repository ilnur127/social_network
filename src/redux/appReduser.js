import { authUserThunk } from "./authReduser"

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false,
}

export const initializedSuccess = () => ({
    type: SET_INITIALIZED
})

export const initializeAppThunk = () => (dispatch) => {
    const dispatchResult = dispatch(authUserThunk())
    dispatchResult.then(dispatch(initializedSuccess()))
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default : {
            return state
        }
    }
}
export default appReducer
