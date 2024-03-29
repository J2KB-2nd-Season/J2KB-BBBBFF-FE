import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import products from '../DeleteThisData/products.json';

{
    /* 나중에는 products 서버에서 가져옴(더미 데이터) */
}

function RightMenu() {
    const user = useSelector((state) => state.user);

    if (user.userData) {
        return (
            <div className="right_item">
                <ul>
                    <li className="menu1">
                        <Link to="/">세일</Link>
                    </li>
                    <li className="menu1">
                        <a href="/">이벤트</a>
                    </li>
                    <li className="menu1">
                        <a href="/service">고객센터</a>
                    </li>
                    {user.userData.isAuth && <li className="menu2">
                        <a href="/cart">주문내역</a>
                    </li>}
                    {user.userData.isAuth && <li className="menu2">
                        <Link
                            to={{
                                pathname: `/write/review`,
                                state: {
                                    products: products,
                                },
                            }}
                        >
                            후기작성
                        </Link>
                    </li>}
                    {user.userData.isAdmin && <li className="menu2">
                        <a href="/admin">관리자</a>
                    </li>}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="right_item">
                Loading...
            </div>
        );
    }
}

export default RightMenu;
