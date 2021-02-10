import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecialComponent, option, adminRoute = null) {
    /*
        option: null => 누구나 출입 가능
                true => 로그인 한 유저만 가능
                false => 로그인 한 유저는 불가능
    */

    function AuthenticationCheck(props) {
        const user = useSelector((state) => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then((response) => {
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login');
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        if (option === false) {
                            props.history.push('/');
                        }
                    }
                }
            });
        }, []);
        return <SpecialComponent {...props} user={user} />;
    }
    return AuthenticationCheck;
}
