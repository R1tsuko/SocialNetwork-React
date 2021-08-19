import { authRequest } from "../../serverRequests/authRequests";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let defaultState = {
    login: null,
    email: null,
    id: null,
    isAuth: false,
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthData = (id, email, login) => ({ type: SET_AUTH_DATA, data: {id, email, login} });

export const authenticate = () => ((dispatch) => {
    authRequest().then((response) => {
        if (!response.resultCode) {
            let { id, email, login } = response.data
            dispatch(setAuthData(id, email, login));
        }
    })
})

export default authReducer;