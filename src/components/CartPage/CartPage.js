import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Typography } from "antd"

const {Title} = Typography

function CartPage() {
    return (
        <div>
            <NavBar/>
            <div style={{width: '75%', margin: "3rem auto", textAlign: "center"}}>
                <Title level={2}>주문 내역</Title>

                서버 연결되면 만들게요
            </div>
        </div>
        
    )
}

export default CartPage