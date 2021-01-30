import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import './NavBar.css';
import 'antd/dist/antd.css';
import '../input.css';

import products from "../DeleteThisData/products.json";

{
    /* 나중에는 products 서버에서 가져옴(더미 데이터) */
}

function NavBar() {

    const [Search, setSearch] = useState('');

    const onSearchHandler = (e) => {
        setSearch(e.currentTarget.value);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-top"></div>
                <div className="navbar-middle">
                    <div className="left_item">
                        <Link to="/">
                            <h1>J2KB STORE</h1>
                        </Link>
                        <form>
                            <Input
                                className={'searchInput'}
                                value={Search}
                                onChange={onSearchHandler}
                                bordered={false}
                            />
                        </form>
                    </div>
                    <div className="right_item">
                        <ul>
                            <li className="menu1">
                                <a href="/">세일</a>
                            </li>
                            <li className="menu1">
                                <a href="/">이벤트</a>
                            </li>
                            <li className="menu1">
                                <a href="/service">고객센터</a>
                            </li>
                            <li className="menu2">
                                <a href="/cart">주문내역</a>
                            </li>
                            <li className="menu2">
                                <Link to={{
                                    pathname: `/write/review`,
                                    state: {
                                        products:products
                                    }
                                }} >후기작성</Link>
                            </li>
                            <li className="menu2">
                                <a href="/admin">관리자</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-bottom">
                    <li>
                        <Link to="/login">
                            <button>로그인</button>
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
            </div>
        </div>
    )
}

export default NavBar
