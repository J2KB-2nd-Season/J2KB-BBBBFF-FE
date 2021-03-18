
import { LOGIN_USER, JOIN_USER, LOGOUT_USER, AUTH_USER } from './type';
import { PRIVATE_KEY, USER_SERVER } from '../components/config';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export function loginUser(data) {
    const request = axios
        .post(`${USER_SERVER}/login`, data, { withCredentials: true })
        .then((response) => response.data);
    return {
        type: LOGIN_USER,
        payload: request,
    };
}
export function registerUser(data) {
    const request = axios
        .post(`${USER_SERVER}/join`, data, { withCredentials: true })
        .then((response) => response.data);
    return {
        type: JOIN_USER,
        payload: request,
    };
}
export function logoutUser() {
    //const request = axios.get(`${USER_SERVER}/logout`, {withCredentials: true}).then((response) => response.data);
    const request = { logoutOk: true };
    return {
        type: LOGOUT_USER,
        payload: request,
    };
}

export function auth(cookies) {
    const request = axios.get(`${USER_SERVER}/auth`, { withCredentials: true }).then((response) => {
        // ↓지울 예정
        const data = response.data;
        if (cookies.member_token) {
            const jwt_parsed = jwt.verify(cookies.member_token, PRIVATE_KEY);
            if (jwt_parsed.id) {
                data.isAuth = Boolean(jwt_parsed.id);
                data.isAdmin = jwt_parsed.id === 'admin' ? true : false;
                data.id = jwt_parsed.id;
                data.role = jwt_parsed.id === 'admin' ? 0 : 1;
            }
        }
        // ↑지울 예정
        return data;
    });
    return {
        type: AUTH_USER,
        payload: request,
    };
}
