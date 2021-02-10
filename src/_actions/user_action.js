import { LOGIN_USER, JOIN_USER, LOGOUT_USER, AUTH_USER } from './type';
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
