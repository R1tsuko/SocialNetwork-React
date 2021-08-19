import { profileRequest } from "../../serverRequests/profileRequests";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';

let defaultState = {
    myPostsData: [
        { id: 1, text: 'post1' },
        { id: 2, text: 'post2' },
        { id: 3, text: 'post3' }
    ],

    newPostText: '',
    profile: null
}

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                myPostsData: [...state.myPostsData, { id: 4, text: state.newPostText }],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (newPostText) => ({ type: UPDATE_NEW_POST_TEXT, newPostText });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const getProfile = (userId) => ((dispatch) => {
    profileRequest(userId).then(response => {
        dispatch(setProfile(response));
    })
})

export default profileReducer;