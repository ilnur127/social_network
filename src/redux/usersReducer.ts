import { UsersApi } from "../utils/api/api"
import { updateObjectInArray } from "../utils/helpers/objectHelpers"
import { UserType } from "../types/types"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users ids
}
export type InitialStateType = typeof initialState

type FollowACActionType = {
    type : typeof FOLLOW,
    userId: number
}
const followAC = (userId : number) : FollowACActionType => ({
    type : FOLLOW,
    userId
})

type UnfollowACActionType = {
    type : typeof UNFOLLOW,
    userId: number
}
const unfollowAC = (userId : number) : UnfollowACActionType => ({
    type: UNFOLLOW,
    userId
})

type SetUsersACActionType = {
    type : typeof SETUSERS,
    users: Array<UserType>
}
const setUsersAC = (users: Array<UserType>) : SetUsersACActionType => ({
    type: SETUSERS,
    users
})

type SetCurrentPageACActionType = {
    type : typeof SET_CURRENT_PAGE,
    currentPage: number
}
const setCurrentPageAC = (currentPage : number) : SetCurrentPageACActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

type SetUsersTotalCountACActionType = {
    type : typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}
const setUsersTotalCountAC = (totalUsersCount : number) : SetUsersTotalCountACActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})

type ToggleIsFetchingACActionType = {
    type : typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
const toggleIsFetchingAC = (isFetching : boolean) : ToggleIsFetchingACActionType=> ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

type ToggleFollowingProgressACActionType = {
    type : typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
type FollowingInProgressType = {
    isFetching: boolean,
    userId : number
}
const toggleFollowingProgressAC = (followingInProgress : FollowingInProgressType) : ToggleFollowingProgressACActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: followingInProgress.isFetching,
    userId: followingInProgress.userId
})

export const getUsersThunkCreator = (page : number, pageSize : number, changePage : boolean) => async (dispatch : any) => {
    dispatch(toggleIsFetchingAC(true))
    if (changePage) {
        dispatch(setCurrentPageAC(page))
    }
    const data = await UsersApi.apiGetUsers(page, pageSize)
    dispatch(setUsersTotalCountAC(data.totalCount))
    dispatch(setUsersAC([...data.items]))
    dispatch(toggleIsFetchingAC(false))
}

const followUnfollowFlow = async (dispatch: any, userId : number, apiMethod : Function, actionCreator : any) => {
    dispatch(toggleFollowingProgressAC({isFetching: true, userId}))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC({isFetching: false, userId}))
}

export const onFolowThunkCreator = (id : number) => async (dispatch : any) => {
    followUnfollowFlow(dispatch, id, UsersApi.apiOnFollow.bind(UsersApi), followAC)
}
export const onUnfolowThunkCreator = (id : number) => async (dispatch : any) => {
    followUnfollowFlow(dispatch, id,  UsersApi.apiOnUnollow.bind(UsersApi), unfollowAC)
}

const usersReducer = (state = initialState, action : any) : InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users : updateObjectInArray(state.users, action.userId, "id", {followed : true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users : updateObjectInArray(state.users, action.userId, "id", {followed : false})
            }
        }
        case SETUSERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default : {
            return state
        }
    }
}
export default usersReducer
