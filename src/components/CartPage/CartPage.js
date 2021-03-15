import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Table, Typography } from "antd"
import { Helmet } from 'react-helmet';
import { CART_SERVER } from '../config';
import axios from 'axios';

const {Title} = Typography

function CartPage() {

    const [Carts, setCarts] = useState([])
    
    useEffect(() => {
      axios.get(`${CART_SERVER}/cartList?memberId=${'admin'}`).then((response) =>{
        console.log(response.data)
        setCarts(response.data)
      })
    }, [])

    const contents = Carts.map((cart, index) => ({
        key: index,
        cart_date: cart.cart_date,
        prod_image: cart.prod_image,
        prod_name: cart.prod_name,
        cart_quan: cart.cart_quan,
        tot_price: cart.prod_price * cart.cart_quan,
        cart_num: cart.cart_num
    }))

    const columns = [
        {
          title: '날짜',
          dataIndex: 'cart_date',
          width: 120,
          fixed: 'left'
        },
        {
          title: '이미지',
          dataIndex: "prod_image",
          width: 150,
          render: url => <img alt={url} src={`../${url}`} style={{width: '100%'}}/>,
          fixed: 'left'
        },
        {
          title: '이름',
          dataIndex: 'prod_name',
          width: 150,
        },
        {
          title: '개수',
          dataIndex: 'cart_quan',
          width: 100,
        },
        {
          title: '총 가격',
          dataIndex: 'tot_price',
          width: 200,
        },
        {
          title: '장바구니 번호',
          dataIndex: 'cart_num',
        }
      ];

    return (
        <div>
            <Helmet>
                <title>주문 내역 페이지</title>
            </Helmet>
            <NavBar/>
            <div style={{width: '75%', margin: "3rem auto", textAlign: "center"}}>
                <Title level={2}>주문 내역</Title>
                <Table bordered 
                 columns={columns} 
                 dataSource={contents} 
                 pagination={{ pageSize: 10}} 
                 scroll={{ x: 1300, y: 400 }} />
            </div>
        </div>
        
    )
}

export default CartPage