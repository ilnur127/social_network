import { FriendType } from "../types/types"
const initialState = {
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
    ] as Array<FriendType>
}
export type InitialStateType = typeof initialState
const siteBarReducer = (state = initialState, action : any) : InitialStateType => {
    return state
}

export default siteBarReducer