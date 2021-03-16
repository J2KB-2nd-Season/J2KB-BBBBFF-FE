import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../_actions/user_action';
import { useCookies } from 'react-cookie'
import { Menu } from 'antd';

function BottomMenu(props) {
    
    const [cookies, setCookie, removeCookie] = useCookies(['member_id']);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const logOut = () => {
        // dispatch(logoutUser()).then(response => {
        
        // ↓지울 예정
        const response = dispatch(logoutUser())
        // ↑지울 예정
        
        if(response.payload.logoutOk) {
                setCookie('member_token', null, {path: '/', maxAge: 0})
                removeCookie('member_token', {path: '/'})
                alert('로그아웃되었습니다!')
                window.location.reload();
            } else {
                alert('로그아웃에 실패하였습니다.')
            }
        // })

        
    }


    if (user.userData && !user.userData.isAuth) {
        return (
            <div className="navbar-bottom">
                <li>
                    <Link to="/login">
                        <button id="loginBtn">로그인</button>
                    </Link>
                </li>
                <Menu mode="horizontal" style={{backgroundColor: "#f1f1f1"}}>
                    <Menu.Item key="info">
                        <Link to="/join">회원가입</Link>
                    </Menu.Item>
                    <Menu.Item key="cart">
                        <Link to="/find/password">비밀번호 찾기</Link>
                    </Menu.Item>
                </Menu>
                <li className="event">
                    <a href="/">회원 가입 EVENT, J2KB STORE에 지금 가입하세요!</a>
                </li>
            </div>
        );
    } else {
        return (
            <div className="navbar-bottom">
                <li className='user-name'>
                    {user.userData.id} 님
                </li>
                <Menu mode="horizontal" style={{backgroundColor: "#f1f1f1"}}>
                    <Menu.Item key="info">
                        <Link to="/changeinfo">개인정보 수정</Link>
                    </Menu.Item>
                    <Menu.Item key="cart">
                        <Link to="/cart">장바구니</Link>
                    </Menu.Item>
                    <Menu.Item key="logout" onClick={logOut}>
                        로그아웃
                    </Menu.Item>
                </Menu>
            </div>
            
        );
    }
}

export default BottomMenu;
