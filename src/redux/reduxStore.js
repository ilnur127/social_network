import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from 'redux-thunk'
import authReducer from "./authReduser"
import dialogsReducer from './dialogsReduser'
import profileReducer from './profileReducer'
import siteBarReducer from './siteBarReduser'
import usersReducer from "./usersReducer"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReduser"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: siteBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store