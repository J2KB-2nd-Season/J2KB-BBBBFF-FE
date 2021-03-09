import { LOGIN_USER, JOIN_USER, LOGOUT_USER, AUTH_USER, 
    FAKE_LOGIN, FAKE_AUTH, FAKE_LOGOUT } from './type';
import { USER_SERVER } from '../components/config';
import axios from 'axios';

export function loginUser(data) {
    const request = axios.post(`${USER_SERVER}/login`, data).then((response) => response.data);
    return {
        type: LOGIN_USER,
        payload: request,
    };
}
export function registerUser(data) {
    const request = axios.post(`${USER_SERVER}/join`, data).then((response) => response.data);
    return {
        type: JOIN_USER,
        payload: request,
    };
}
export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`).then((response) => response.data);
    return {
        type: LOGOUT_USER,
        payload: request,
    };
}

export function auth() {
    const request = axios.get(`${USER_SERVER}/auth`).then((response) => response.data);
    return {
        type: AUTH_USER,
        payload: request,
    };
}

//나중에 지움
export function fakeLogin(id) {
    return {
        type: FAKE_LOGIN,
        payload: true,
        id
    }
}

export function fakeAuth(user) {
    window.localStorage.setItem('user', JSON.stringify(user.userData))
    return {
        type: FAKE_AUTH,
        payload: user,   
    }
}

export function fakeLogout() {
    return {
        type: FAKE_LOGOUT,
        payload: true,   
    }
}
//나중에 지움