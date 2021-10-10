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
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    addPost() {
        this._state.profilePage.posts.push({
            id: this._state.profilePage.posts + 1,
            text: this._state.profilePage.newPostText,
            likes: 0
        })
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree( )
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
    
        this._rerenderEntireTree()
    },
    addMessage() {
        this._state.dialogsPage.messages.push({
            id: this._state.dialogsPage.messages + 1,
            text: this._state.dialogsPage.newMessageText,
            meMessage: true
        })
        this._state.dialogsPage.newMessageText = ''
        this._rerenderEntireTree()
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
    
        this._rerenderEntireTree()
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    }
}

export default store
