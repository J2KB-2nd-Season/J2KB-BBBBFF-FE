import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Button, Input } from 'antd';
import {
    checkName,
    checkPW,
    checkPW2,
    checkMail,
    checkNumber,
    checkAddress,
    handleButton2,
} from '../utils/Func';
import styles from '../JoinPage/JoinPage.module.css';
import '../input.css';
import axios from 'axios';
import { USER_SERVER } from '../config';

function InfoChangePage(props) {
    const [Name, setName] = useState('');
    const [Id, setId] = useState('');
    const [OldPW, setOldPW] = useState('');
    const [PW, setPW] = useState('');
    const [PW2, setPW2] = useState('');
    const [Mail, setMail] = useState('');
    const [Number, setNumber] = useState('');
    const [Address, setAddress] = useState('');

    const dispatch = useDispatch();

    const user = useSelector(state => state.user)

    useEffect(() => {
        // axios.get(`${USER_SERVER}/getMemberList`).then(response => {
        //     if(response.data) {
        //         console.log(response.data)
        //         //const data = response.data;
        //         const data = response.data[0];
        //         setName(data.member_name);
        //         setId(data.member_id);
        //         setMail(data.member_email);
        //         setNumber(data.member_phone);
        //         setAddress(data.member_adrs);
        //     }
        // })
        
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        // let data = {
        //     "member_name": Name,
        //     "member_id": Id,
        //     "member_pw": PW,
        //     "member_email": Mail,
        //     "member_phone": Number,
        //     "member_adrs": Address,
        //     grade: 0
        // };

        // dispatch(registerUser(data)).then((response) => {
        //     if (response.payload) {
        //         alert(`회원가입 성공!`);
        //         // 로그인으로 이동
        //         props.history.push('/login');
        //     } else {
        //         alert('회원가입 실패!');
        //     }
        // });
    };


    const dupCheckEmail = () => {
        if(user.userData.email === Mail) {
            alert('기존 이메일입니다.')
            return;
        }
        const data = {
            "member_email": Mail
        }
        axios.post(`${USER_SERVER}/validate/email`, data).then(response => {
            if(response.data) {
                alert('중복된 이메일이 존재합니다.')
            } else {
                alert('사용 가능한 이메일입니다.')
            }
        })
    }

    const onNamehandler = (e) => {
        setName(e.currentTarget.value);
    };
    const onOldPWhandler = (e) => {
        setOldPW(e.currentTarget.value);
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

    return ( user &&
        <div className={styles.wrap}>
            <Helmet>
                <title>개인정보 변경</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.name}>
                    <Link to='/'>
                        <div className={styles.title}>J2KB STORE</div>
                    </Link>
                    <h3>개인정보 변경</h3>
                </div>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_name">
                                <div>
                                    이름(성함)
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
                                    handleButton2();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_id">
                                <div>
                                    아이디
                                </div>
                            </label>
                            <Input
                                className="joinInput"
                                value={Id}
                                disabled
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_email">
                                <div>
                                    이메일
                                </div>
                                <Button style={{height: '30px', fontSize: '0.8rem',
                                    margin: '0 0 0.5rem 0'}} onClick={dupCheckEmail}>
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
                                    handleButton2();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_phon">
                                <div>
                                    전화번호
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
                                    handleButton2();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_adrs">
                                <div>
                                    주소
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
                                    handleButton2();
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="member_pw">
                                <div>
                                    비밀번호 
                                </div>
                            </label>
                            <Input.Password
                                className="joinInput"
                                id={'member_oldpw'}
                                placeholder="기존 비밀번호"
                                value={OldPW}
                                maxLength={30}
                                onChange={(e) => {
                                    onOldPWhandler(e)
                                    handleButton2();
                                }}
                                bordered={false}
                                required
                            />
                            
                        </div>
                        <div className={styles.inputContainer}>
                            <Input.Password
                                className="joinInput"
                                id={'member_pw'}
                                placeholder="새 비밀번호(숫자,영문,특수문자 조합 8~30자)"
                                value={PW}
                                maxLength={30}
                                onChange={(e) => {
                                    onPWhandler(e);
                                    checkPW();
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
                                }}
                                bordered={false}
                                required
                            />
                        </div>
                        <button className={styles.joinButton} type="submit" disabled>
                            수정완료
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

export default withRouter(InfoChangePage);
