import { LOGIN_USER, JOIN_USER } from './type';
import axios from 'axios';

export function loginUser(data) {
    const request = axios.post('users/login', data).then((response) => response.data);
    return {
        type: LOGIN_USER,
        payload: request,
    };
}
export function registerUser(data) {
    const request = axios.post('users/join', data).then((response) => response.data);
    return {
        type: JOIN_USER,
        payload: request,
    };
}
