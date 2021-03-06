import { followRequest, getUsersRequest, unFollowRequest } from "../../serverRequests/usersRequests";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS_DATA = 'SET_USERS_DATA';
const SET_USERS_DATA_FETCHING = 'SET_USERS_DATA_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let defaultState = {
    usersData: [],
    isFetching: false,
    followingProgressUsers: [],
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((user) => user.id === action.userId ? { ...user, followed: true } : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((user) => user.id === action.userId ? { ...user, followed: false } : user)
            }
        case SET_USERS_DATA:
            return {
                ...state,
                usersData: [...state.usersData, ...action.usersData],
            }
        case SET_USERS_DATA_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgressUsers: state.followingProgressUsers.includes(action.userId)
                    ? state.followingProgressUsers.filter(id => action.userId !== id)
                    : [...state.followingProgressUsers, action.userId],
            }
        default:
            return state;
    }
}

export const followSucces = (userId) => ({ type: FOLLOW, userId });
export const unFollowSucces = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersData = (usersData) => ({ type: SET_USERS_DATA, usersData });
export const setUsersDataFetching = (isFetching) => ({ type: SET_USERS_DATA_FETCHING, isFetching });
export const toggleIsFollowingProgress = (userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, userId });

export const getUsers = (currentPage) => ((dispatch) => {
    dispatch(setUsersDataFetching(true));
    getUsersRequest(currentPage).then(response => {
        dispatch(setUsersData(response.items));
        dispatch(setUsersDataFetching(false));
    })
})
export const follow = (userId) => ((dispatch) => {
    dispatch(toggleIsFollowingProgress(userId));

    followRequest(userId).then(response => {
        if (!response.resultCode) {
            dispatch(followSucces(userId));
        }

        dispatch(toggleIsFollowingProgress(userId));
    })
})
export const unFollow = (userId) => ((dispatch) => {
    dispatch(toggleIsFollowingProgress(userId));

    unFollowRequest(userId).then(response => {
        if (!response.resultCode) {
            dispatch(unFollowSucces(userId));
        }

        dispatch(toggleIsFollowingProgress(userId));
    })
})

export default usersReducer;