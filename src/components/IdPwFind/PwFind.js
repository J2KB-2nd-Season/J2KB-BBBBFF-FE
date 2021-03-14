import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Input, Typography } from 'antd';
import { phonehandlePwButton, mailhandlePwButton, wowhandlePwButton } from './IdPwFunc';
import { Helmet } from 'react-helmet';
import './IdPwFind.css';
import $ from 'jquery';
import axios from 'axios';
import { USER_SERVER } from '../config';
window.$ = $;

const { Title } = Typography;

function IdPwFind() {
    const [Id, setId] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Number, setNumber] = useState('');
    const [Value, setValue] = useState(1);

    const onChange = (e) => {
        setValue(e.target.value);
        $('.submitButton').attr('disabled', true);
        $('.ant-radio-checked').add(
            setId((e.target.value = '')),
            setName((e.target.value = '')),
            setEmail((e.target.value = '')),
            setNumber((e.target.value = '')),
        );
    };
    const onIdHandler = (e) => {
        setId(e.target.value);
    };

    const onNameHandler = (e) => {
        setName(e.target.value);
    };

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const onNumberHandler = (e) => {
        setNumber(e.target.value);
    };

    const onSubmit = () => {
        const data = {
            "member_id": Id,
            "member_email": Email
        }
        axios.post(`${USER_SERVER}/find/password`, data).then(response =>{
                if(response.data === '') {
                    alert(`일치하는 계정이 없습니다.`)
                } else {
                    alert(`임시 비밀번호가 설정되었습니다.\n임시 비밀번호: ${response.data}`)
                }
            }
        )
    }

    return (
        <div className="container">
            <Helmet>
                <title>비밀번호 찾기</title>
            </Helmet>
            <div style={{textAlign: 'center'}}>
                <Link to='/'>
                    <Title level={2} style={{margin: '0 auto'}}>J2KB STORE</Title>
                </Link>
                <Title level={2}>비밀번호 찾기</Title>
            </div>
            <div style={{ display: 'flex' }}>
                <div
                    className="linkButtonDiv"
                    style={{
                        height: '50px',
                        border: '1px solid #f1f1f1',
                    }}
                >
                    <Link
                        to="/find/id"
                        className="linkButton"
                        style={{
                            backgroundColor: '#f1f1f1',
                        }}
                    >
                        아이디 찾기
                    </Link>
                </div>
                <div
                    className="linkButtonDiv"
                    style={{
                        height: '50px',
                        border: '1px solid #f1f1f1',
                    }}
                >
                    <Link
                        to="/find/password"
                        className="linkButton"
                        style={{
                            backgroundColor: 'white',
                        }}
                    >
                        비밀번호 찾기
                    </Link>
                </div>
            </div>
            <Radio.Group onChange={onChange} value={Value}>
                <Radio value={1}>휴대전화</Radio>
                <Radio value={2}>이메일</Radio>
                <Radio value={3}>본인인증</Radio>
            </Radio.Group>
            {Value === 1 && (
                <div>
                    <div>
                        <Input
                            className="IdInput"
                            placeholder="아이디 입력"
                            style={{ height: '50px' }}
                            value={Id}
                            minLength={5}
                            maxLength={20}
                            onChange={(e) => {
                                onIdHandler(e);
                                phonehandlePwButton();
                            }}
                            bordered={false}
                        />
                    </div>
                    <div>
                        <Input
                            className="NameInput"
                            placeholder="이름 입력"
                            style={{ height: '50px' }}
                            value={Name}
                            onChange={(e) => {
                                onNameHandler(e);
                                phonehandlePwButton();
                            }}
                            bordered={false}
                        />
                    </div>
                    <div>
                        <div style={{ display: 'flex', position: 'relative' }}>
                            <Input
                                className="PhoneInput"
                                placeholder="휴대전화 입력(-없이)"
                                style={{ height: '50px' }}
                                value={Number}
                                onChange={(e) => {
                                    onNumberHandler(e);
                                    phonehandlePwButton();
                                }}
                                bordered={false}
                            />
                            <button
                                id={'sendCertPhoneBtn'}
                                style={{
                                    position: 'absolute',
                                    top: '25px',
                                    right: '11px',
                                    fontSize: '14px',
                                    width: '97px',
                                    height: '30px',
                                    border: 'none',
                                    outline: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                인증요청
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {Value === 2 && (
                <div>
                    <Input
                        className="IdInput"
                        placeholder="아이디 입력"
                        style={{ height: '50px' }}
                        value={Id}
                        minLength={5}
                        maxLength={20}
                        onChange={(e) => {
                            onIdHandler(e);
                            mailhandlePwButton();
                        }}
                        bordered={false}
                    />
                    <Input
                        className="EmailInput"
                        placeholder="이메일 입력"
                        style={{ height: '50px' }}
                        value={Email}
                        onChange={(e) => {
                            onEmailHandler(e);
                            mailhandlePwButton();
                        }}
                        bordered={false}
                    />
                </div>
            )}
            {Value === 3 && (
                <div>
                    <p style={{ fontSize: '15px', marginTop: '10px' }}>
                        본인명의의 휴대폰으로 비밀번호를 찾는 방법입니다. <br />
                        기존에 본인인증을 완료한 아이디만 찾으실 수 있습니다.
                    </p>
                    <Input
                        className="IdInput"
                        placeholder="아이디 입력"
                        style={{ height: '50px' }}
                        value={Id}
                        minLength={5}
                        maxLength={20}
                        onChange={(e) => {
                            onIdHandler(e);
                            wowhandlePwButton();
                        }}
                        bordered={false}
                    />
                </div>
            )}
            <button type="submit" className="submitButton" onClick={onSubmit}>
                비밀번호 찾기
            </button>
        </div>
    );
}

export default IdPwFind;
