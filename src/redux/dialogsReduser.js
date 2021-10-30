const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const initialState = {
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
}
export const addMessageActionCreator = () => ({
    type : ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText
})

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push({
                id: state.messages + 1,
                text: state.newMessageText,
                meMessage: true
            })
            state.newMessageText = ''
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            break;
        default:
            console.log("Нет таких action");
            break;
    }
    return state
}
export default dialogsReducer
