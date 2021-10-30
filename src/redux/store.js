import dialogsReducer from './dialogsReduser'
import profileReducer from './profileReducer'
import siteBarReducer from './siteBarReduser'
const store = {
    _state: {
        dialogsPage: {
            dialogs: [
            {
                id: 1,
                name: 'ilnur'
            },
            {
                id: 2,
                name: 'Andrey'
            },
            {
                id: 3,
                name: 'Sveta'
            },
            {
                id: 4,
                name: 'Sasha'
            },
            {
                id: 5,
                name: 'Valera'
            },
            {
                id: 6,
                name: 'Viktor'
            }
            ],
            messages: [
                {
                    id: 1,
                    text: 'Hi',
                    meMessage: false
                },
                {
                    id: 2,
                    text: 'How are you?',
                    meMessage: true
                },
                {
                    id: 3,
                    text: 'Fine',
                    meMessage: false
                }
            ],
            newMessageText: ''
        },
        profilePage: {
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
            newPostText: ''
        },
        sitebar: {
            friends: [
                {
                    id: 1,
                    name: 'Ivan'
                },
                {
                    id: 1,
                    name: 'Gena'
                },
                {
                    id: 1,
                    name: 'Mansur'
                }
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sitebar = siteBarReducer(this._state.sitebar, action)
        this._rerenderEntireTree()
    }
}
export default store
