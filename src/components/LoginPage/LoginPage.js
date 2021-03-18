import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_action';
import { Input } from 'antd';
import { Helmet } from 'react-helmet';
import styles from './LoginPage.module.css';
import styles2 from '../JoinPage/JoinPage.module.css';
import { checkId, checkPw, loginButton } from './loginFunc';
import '../input.css';
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '../config';

function LoginPage(props) {
    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['member_id']);
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();

        let data = {
            member_id: Id,
            member_pw: Password,
        };
        dispatch(loginUser(data)).then((response) => {
            if (response.payload.status === 0) {
<<<<<<< HEAD
                jwt.sign({id: response.payload.member_id}, PRIVATE_KEY, { 
                    expiresIn: '10m'}, function(err, token) {
                        if(err) console.log(err)
                        else {
                            setCookie('member_token', token, {path: '/', maxAge: 60*10})
                            alert(`${Id}님 환영합니다!`);
                            props.history.push('/');                                    
                        }
                })
=======
                setCookie('member_id', Id, { path: '/', maxAge: 60 * 60 });
                alert(`${Id}님 환영합니다!`);
                props.history.push('/');
>>>>>>> e141586e1ceeb57092a9aad37fba6eddcc762529
            } else {
                alert('로그인 실패!');
            }
        });
    };

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    setTimeout(() => loginButton());

    return (
        <div className={styles.wrap}>
            <Helmet>
                <title>로그인</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.name}>
                    <Link to="/">
                        <div className={styles.title}>J2KB STORE</div>
                    </Link>
                </div>
                <div className={styles2.form}>
                    <form onSubmit={handleLogin}>
                        <Input
                            className="loginInput"
                            id="loginIdInput"
                            placeholder="아이디를 입력해 주세요."
                            value={Id}
                            minLength={5}
                            maxLength={20}
                            onChange={(e) => (onIdHandler(e), checkId())}
                            bordered={false}
                            required
                        />
                        <Input.Password
                            className="loginInput"
                            id="loginPwInput"
                            placeholder="비밀번호를 입력해 주세요."
                            value={Password}
                            minLength={4}
                            maxLength={20}
                            onChange={(e) => (onPasswordHandler(e), checkId())}
                            bordered={false}
                            required
                        />
                        <button className={styles2.loginButton} type="submit" disabled>
                            로그인
                        </button>
                    </form>
                    계정이 없으신가요? <Link to="/join">회원가입</Link>
                    <br />
                    <br />
                    비밀번호를 잊어버리셨나요? <Link to="/find/password">비밀번호 찾기</Link>
                </div>
                <div className={styles2.info}>
                    <Link to="/service">고객센터</Link>
                    <h3>J2KB Study Group. since 2020</h3>
                </div>
            </div>
        </div>
    );
}

export default withRouter(LoginPage);
