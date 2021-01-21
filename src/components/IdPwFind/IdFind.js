import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { phonehandleIdButton, mailhandleIdButton, wowhandleIdButton } from './IdPwFunc';
import { Radio, Input, Typography } from 'antd';
import './IdPwFind.css';
import $ from 'jquery';
window.$ = $;

const { Title } = Typography;

function IdFind() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Number, setNumber] = useState('');
    const [Value, setValue] = useState(1);

    const onChange = (e) => {
        setValue(e.target.value);
        $('.submitButton').attr('disabled', true);
        $('.ant-radio-checked').add(
            setName((e.target.value = '')),
            setEmail((e.target.value = '')),
            setNumber((e.target.value = '')),
        );
    };

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onNumberHandler = (e) => {
        setNumber(e.currentTarget.value);
    };

    return (
        <div className="container">
            <Helmet>
                <title>아이디 찾기</title>
            </Helmet>
            <div>
                <Title level={2}>아이디 찾기</Title>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="linkButtonDiv">
                    <Link
                        to="/find/id"
                        className="linkButton"
                        style={{
                            backgroundColor: 'white',
                        }}
                    >
                        아이디 찾기
                    </Link>
                </div>
                <div className="linkButtonDiv">
                    <Link
                        to="/find/password"
                        className="linkButton"
                        style={{
                            backgroundColor: '#f1f1f1',
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
                            className="NameInput"
                            placeholder="이름 입력"
                            style={{ height: '50px' }}
                            value={Name}
                            onChange={(e) => {
                                onNameHandler(e);
                                phonehandleIdButton();
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
                                    phonehandleIdButton();
                                }}
                                bordered={false}
                            />
                            <button
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
                        className="EmailInput"
                        placeholder="이메일 입력"
                        style={{ height: '50px' }}
                        value={Email}
                        onChange={(e) => {
                            onEmailHandler(e);
                            mailhandleIdButton();
                        }}
                        bordered={false}
                    />
                </div>
            )}
            {Value === 3 &&
                wowhandleIdButton(
                    <div>
                        <p style={{ fontSize: '15px', marginTop: '10px' }}>
                            본인명의의 휴대폰으로 아이디를 찾는 방법입니다. <br />
                            기존에 본인인증을 완료한 아이디만 찾으실 수 있습니다.
                        </p>
                    </div>,
                )}
            <button type="submit" className="submitButton" disabled>
                아이디 찾기
            </button>
        </div>
    );
}

export default IdFind;
