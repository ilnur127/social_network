import { combineReducers, createStore } from "redux"
import dialogsReducer from './dialogsReduser'
import profileReducer from './profileReducer'
import siteBarReducer from './siteBarReduser'
import usersReducer from "./usersReducer"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: siteBarReducer,
    usersPage: usersReducer
})
const store = createStore(reducers)

export default store