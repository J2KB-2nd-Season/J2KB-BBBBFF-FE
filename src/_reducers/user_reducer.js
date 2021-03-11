import { LOGIN_USER, JOIN_USER, LOGOUT_USER, AUTH_USER } from '../_actions/type';

const initialState = {
    userData: window.localStorage.getItem('user') 
    ? JSON.parse(window.localStorage.getItem('user')) 
    : {
        id: null, isAuth: false, isAdmin: false
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };
        case JOIN_USER:
            return { ...state, registerSuccess: action.payload };
        case LOGOUT_USER:
            return { ...state };
        case AUTH_USER:
            return { ...state, userData: action.payload };
    

        default:
            return { ...state };
    }
}
