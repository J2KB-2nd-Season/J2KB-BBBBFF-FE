import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function BottomMenu() {
    const user = useSelector((state) => state.user);

    if (user.userData && !user.userData.inAuth) {
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
                <li>이름</li>
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
                <li>로그아웃</li>
                <li className="event">
                    <a href="/">회원 가입 EVENT, J2KB STORE에 지금 가입하세요!</a>
                </li>
            </div>
        );
    }
}

export default BottomMenu;
