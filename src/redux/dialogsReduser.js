const ADD_MESSAGE = 'ADD-MESSAGE'
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
}
export const addMessageActionCreator = (newText) => ({
    type : ADD_MESSAGE,
    newText
})

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state,
                messages : [...state.messages, {
                    id: state.messages + 1,
                    text: action.newText,
                    meMessage: true
                }]
            }
        }
        default : {
            return state
        }
    }
}
export default dialogsReducer
