import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMiddleware from 'redux-thunk'
import authReducer from "./authReduser.ts"
import dialogsReducer from './dialogsReduser.ts'
import profileReducer from './profileReducer.ts'
import siteBarReducer from './siteBarReduser.ts'
import usersReducer from "./usersReducer.ts"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReduser.ts"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: siteBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store