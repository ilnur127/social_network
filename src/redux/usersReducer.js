import { UsersApi } from "../utils/api/api"
import { updateObjectInArray } from "../utils/helpers/objectHelpers"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const followAC = (userId) => ({
    type : FOLLOW,
    userId
})
const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})
const setUsersAC = (users) => ({
    type: SETUSERS,
    users
})
const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
const setUsersTotalCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
const toggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
const toggleFollowingProgressAC = (followingInProgress) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: followingInProgress.isFetching,
    userId: followingInProgress.userId
})

export const getUsersThunkCreator = (page, pageSize, changePage) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    if (changePage) {
        dispatch(setCurrentPageAC(page))
    }
    const data = await UsersApi.apiGetUsers(page, pageSize)
    dispatch(setUsersTotalCountAC(data.totalCount))
    dispatch(setUsersAC([...data.items]))
    dispatch(toggleIsFetchingAC(false))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgressAC({isFetching: true, userId}))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC({isFetching: false, userId}))
}

export const onFolowThunkCreator = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, UsersApi.apiOnFollow.bind(UsersApi), followAC)
}
export const onUnfolowThunkCreator = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id,  UsersApi.apiOnUnollow.bind(UsersApi), unfollowAC)
}

const usersReducer = (state = initialState, action) => {
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
