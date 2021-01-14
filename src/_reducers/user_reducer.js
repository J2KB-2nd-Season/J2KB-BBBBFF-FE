import { LOGIN_USER, JOIN_USER } from '../_actions/type';

export default function (state = [], action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };
        case JOIN_USER:
            return { ...state, registerSuccess: action.payload };
    }
}
