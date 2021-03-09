import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fakeLogout } from '../../_actions/user_action';

function BottomMenu(props) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const logOut = () => {
        //나중에 지움
        dispatch(fakeLogout())
        alert('로그아웃되었습니다!')
        window.location.reload();
        //나중에 지움
    }


    if (user.userData && !user.userData.isAuth) {
        return (
            <div className="navbar-bottom">
                <li>
                    <Link to="/login">
                        <button id="loginBtn">로그인</button>
                    </Link>
                </li>
                <li>
                    <Link to="/join">회원가입</Link>
                </li>
                <li>
                    <Link to="/find/password">비밀번호 찾기</Link>
                </li>
                <li className="event">
                    <a href="/">회원 가입 EVENT, J2KB STORE에 지금 가입하세요!</a>
                </li>
            </div>
        );
    } else {
        return (
            <div className="navbar-bottom">
                <li>{user.userData.id}님</li>
                <li>알림</li>
                <li>
                    <Link to="/">마이페이지</Link>
                </li>
                <li>
                    <Link to="/">쪽지</Link>
                </li>
                <li>활동정보</li>
                <li>쇼핑정보</li>
                <li>
                    <Link to="/">좋아요</Link>
                </li>
                <li>
                    <Link to="/cart">장바구니</Link>
                </li>
                <li>
                    <Link to="/service">고객센터</Link>
                </li>
                <li onClick={logOut}>로그아웃</li>
                <li className="event">
                    <a href="/">회원 가입 EVENT, J2KB STORE에 지금 가입하세요!</a>
                </li>
            </div>
        );
    }
}

export default BottomMenu;
