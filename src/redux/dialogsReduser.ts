const ADD_MESSAGE = 'ADD-MESSAGE'

type DialogType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    text: string,
    meMessage: boolean
}

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
    ] as Array<DialogType>,
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
    ] as Array<MessageType>,
}
export type InitialStateType = typeof initialState

type AddMessageActionCreatorActionType = {
    type: typeof ADD_MESSAGE,
    newText: string
}
export const addMessageActionCreator = (newText : string) : AddMessageActionCreatorActionType => ({
    type : ADD_MESSAGE,
    newText
})

const dialogsReducer = (state = initialState, action : any) : InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state,
                messages : [...state.messages, {
                    id: state.messages.length + 1,
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
