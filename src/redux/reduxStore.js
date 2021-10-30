import { combineReducers, createStore } from "redux"
import dialogsReducer from './dialogsReduser'
import profileReducer from './profileReducer'
import siteBarReducer from './siteBarReduser'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: siteBarReducer
})
const store = createStore(reducers)

export default store