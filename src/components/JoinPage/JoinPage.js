import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fakeLogin, registerUser } from '../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Button, Input } from 'antd';
import {
    checkName,
    checkID,
    checkPW,
    checkPW2,
    checkMail,
    checkNumber,
    checkAddress,
    handleButton,
} from '../utils/Func';
import styles from './JoinPage.module.css';
import '../input.css';

function JoinPage(props) {
    const [Name, setName] = useState('');
    const [Id, setId] = useState('');
    const [PW, setPW] = useState('');
    const [PW2, setPW2] = useState('');
    const [Mail, setMail] = useState('');
    const [Number, setNumber] = useState('');
    const [Address, setAddress] = useState('');

    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();

        let data = {
            "member_name": Name,
            "member_id": Id,
            "member_pw": PW,
            "member_email": Mail,
            "member_phone": Number,
            "member_adrs": Address,
            grade: 0
        };

        dispatch(registerUser(data)).then((response) => {
            if (response.payload) {
                console.log(response)
                alert(`회원가입 성공!`);
                // 로그인으로 이동
                props.history.push('/login');
            } else {
                console.log(response)
                alert('회원가입 실패!');
            }
        });
    };

    const onNamehandler = (e) => {
        setName(e.currentTarget.value);
    };
    const onIdhandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPWhandler = (e) => {
        setPW(e.currentTarget.value);
    };
    const onPW2handler = (e) => {
        setPW2(e.currentTarget.value);
    };
    const onMailhandler = (e) => {
        setMail(e.currentTarget.value);
    };
    const onNumberhandler = (e) => {
        setNumber(e.currentTarget.value);
    };
    const onAddresshandler = (e) => {
        setAddress(e.currentTarget.value);
    };

    return (
        <div className={styles.wrap}>
            <Helmet>
                <title>회원가입</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.name}>
                    <div className={styles.title}>J2KB STORE</div>
                    <h3>회원가입</h3>
                </div>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_name">
                                <div>
                                    이름(성함)<b className={styles.b}>*</b>
                                </div>
                            </label>
                            <Input
                                className="joinInput"
                                id={'member_name'}
                                placeholder="이름(성함)"
                                value={Name}
                                maxLength={20}
                                onChange={(e) => {
                                    onNamehandler(e);
                                    checkName();
                                    handleButton();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_id">
                                <div>
                                    아이디<b className={styles.b}>*</b> 
                                </div>
                                <Button style={{height: '30px', fontSize: '0.8rem',
                                    margin: '0 0 0.5rem 0'}}>
                                    중복확인
                                </Button>
                            </label>
                            <Input
                                className="joinInput"
                                id={'member_id'}
                                placeholder="아이디 입력(5자 이상)"
                                value={Id}
                                maxLength={20}
                                onChange={(e) => {
                                    onIdhandler(e);
                                    checkID();
                                    handleButton();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_pw">
                                <div>
                                    비밀번호<b className={styles.b}>*</b> 
                                </div>
                            </label>
                            <Input.Password
                                className="joinInput"
                                id={'member_pw'}
                                placeholder="비밀번호(숫자,영문,특수문자 조합 8~30자)"
                                value={PW}
                                maxLength={30}
                                onChange={(e) => {
                                    onPWhandler(e);
                                    checkPW();
                                    handleButton();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <Input.Password
                                className="joinInput"
                                id={'member_pw2'}
                                placeholder="비밀번호 확인"
                                value={PW2}
                                maxLength={30}
                                onChange={(e) => {
                                    onPW2handler(e);
                                    checkPW2();
                                    handleButton();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_email">
                                <div>
                                    이메일<b className={styles.b}>*</b> 
                                </div>
                                <Button style={{height: '30px', fontSize: '0.8rem',
                                    margin: '0 0 0.5rem 0'}}>
                                    중복확인
                                </Button>
                            </label>
                            <Input
                                className="joinInput"
                                id={'member_email'}
                                placeholder="이메일"
                                value={Mail}
                                maxLength={40}
                                onChange={(e) => {
                                    onMailhandler(e);
                                    checkMail();
                                    handleButton();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_phon">
                                <div>
                                    전화번호<b className={styles.b}>*</b> 
                                </div>
                            </label>
                            <Input
                                className="joinInput"
                                id={'member_phon'}
                                placeholder="전화번호"
                                value={Number}
                                maxLength={20}
                                onChange={(e) => {
                                    onNumberhandler(e);
                                    checkNumber();
                                    handleButton();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_adrs">
                                <div>
                                    주소<b className={styles.b}>*</b> 
                                </div>    
                                
                            </label>
                            <Input
                                className="joinInput"
                                id={'member_adrs'}
                                placeholder="주소"
                                value={Address}
                                maxLength={100}
                                onChange={(e) => {
                                    onAddresshandler(e);
                                    checkAddress();
                                    handleButton();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <b className={styles.b}>* 표시된 항목은 필수입력 사항입니다.</b>
                        <button className={styles.joinButton} type="submit" disabled>
                            회원가입
                        </button>
                    </form>
                </div>
                <div className={styles.info}>
                    <Link to="/service">고객센터</Link>
                    <h3>J2KB Study Group. since 2020</h3>
                </div>
            </div>
        </div>
    );
}

export default withRouter(JoinPage);
