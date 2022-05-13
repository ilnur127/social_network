import { authUserThunk } from "./authReduser"

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false,
}
export type InitialStateType = typeof initialState

type initializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}
export const initializedSuccess = () : initializedSuccessActionType => ({
    type: SET_INITIALIZED
})

export const initializeAppThunk = () => (dispatch: any) => {
    const dispatchResult = dispatch(authUserThunk())
    dispatchResult.then(dispatch(initializedSuccess()))
}

const appReducer = (state = initialState, action: any) : InitialStateType => {
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
