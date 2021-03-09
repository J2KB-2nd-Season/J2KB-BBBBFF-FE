import { LOGIN_USER, JOIN_USER, LOGOUT_USER, AUTH_USER, 
    FAKE_LOGIN, FAKE_AUTH, FAKE_LOGOUT  } from '../_actions/type';

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
        
        //나중에 지움
        case FAKE_LOGIN:
            return { ...state, userData: {
                id: action.id, isAuth: true, isAdmin: true 
            } };
        case FAKE_AUTH:
            return { ...state,
            userData: state.userData ? state.userData : {
                id: null, isAuth: false, isAdmin: false
                } 
            };
        case FAKE_LOGOUT:
            window.localStorage.removeItem('user')
            return { ...state, userData: {
                id: null, isAuth: false, isAdmin: false
            } };
        //나중에 지움

        default:
            return { ...state };
    }
}
