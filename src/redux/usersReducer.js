const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

const initialState = {
    users: []
}
export const followAC = (userId) => ({
    type : FOLLOW,
    userId
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsersAC = (users) => ({
    type: SETUSERS,
    users
})

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users : state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed : true }
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users : state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed : false }
                    }
                    return user
                })
            }
        }
        case SETUSERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default : {
            return state
        }
    }
}
export default usersReducer