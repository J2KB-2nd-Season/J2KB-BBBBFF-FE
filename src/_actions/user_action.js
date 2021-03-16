import { LOGIN_USER, JOIN_USER, LOGOUT_USER, AUTH_USER,  } from './type';
import { USER_SERVER } from '../components/config';
import axios from 'axios';
import { useCookies } from 'react-cookie';



export function loginUser(data) {
    const request = axios.post(`${USER_SERVER}/login`, data, {withCredentials: true}).then((response) => response.data);
    return {
        type: LOGIN_USER,
        payload: request,
    };
}
export function registerUser(data) {
    const request = axios.post(`${USER_SERVER}/join`, data, {withCredentials: true}).then((response) => response.data);
    return {
        type: JOIN_USER,
        payload: request,
    };
}
export function logoutUser() {
    //const request = axios.get(`${USER_SERVER}/logout`, {withCredentials: true}).then((response) => response.data);
    const request = { logoutOk: true }
    return {
        type: LOGOUT_USER,
        payload: request,
    };
}

export function auth(cookies) {
    const request = axios.get(`${USER_SERVER}/auth`, {withCredentials: true}).then((response) => {
        // ↓지울 예정
        const data = response.data;
        if(cookies.member_id) {
            data.isAuth = true;
            data.isAdmin = cookies.member_id === 'admin' ? true : false;
            data.id = cookies.member_id;
            data.role = cookies.member_id === 'admin' ? 0 : 1;
        }
        // ↑지울 예정
        return data;
    });
    return {
        type: AUTH_USER,
        payload: request,
    };
}