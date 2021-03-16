import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import { Table, Typography } from 'antd';
import { Helmet } from 'react-helmet';

import axios from 'axios';
import { USER_SERVER } from '../config';
// 나중에는 서버에서 가져옴 (더미 데이터)

const { Title } = Typography;

function CustomerPage() {

    const [Users, setUsers] = useState([])
    
    useEffect(() => {
      axios.get(`${USER_SERVER}/getMemberList`).then((response) =>{
        setUsers(response.data)
      })
    }, [Users])

    const columns = [
        {
          title: '등급',
          dataIndex: 'grade',
          width: 60,
          fixed: 'left'
        },
        {
          title: 'ID',
          dataIndex: 'member_id',
          width: 150,
          fixed: 'left'
        },
        {
          title: '이름',
          dataIndex: 'member_name',
          width: 100,
        },
        {
          title: '전화번호',
          dataIndex: 'member_phone',
          width: 175,
        },
        {
          title: '이메일',
          dataIndex: 'member_email',
          width: 200,
        },
        {
          title: 'Address',
          dataIndex: 'member_adrs',
        }
      ];

    return (
        <div>
            <Helmet>
                <title>고객 페이지</title>
            </Helmet>
            <NavBar />
            <div style={{width: '75%', margin: "3rem auto", textAlign: "center"}}>
                <Title level={2}>고객 정보</Title>
                 <Table bordered 
                 columns={columns}
                 dataSource={Users} 
                 pagination={{ pageSize: 10}} 
                 scroll={{ x: 1300, y: 400 }} />
            </div>
        </div>
    )
}

export default CustomerPage
