import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Typography } from "antd"
import { Helmet } from 'react-helmet';

const {Title} = Typography

function CartPage() {
    return (
        <div>
            <Helmet>
                <title>주문 내역 페이지</title>
            </Helmet>
            <NavBar/>
            <div style={{width: '75%', margin: "3rem auto", textAlign: "center"}}>
                <Title level={2}>주문 내역</Title>

                서버 연결되면 만들게요
            </div>
        </div>
        
    )
}

export default CartPage