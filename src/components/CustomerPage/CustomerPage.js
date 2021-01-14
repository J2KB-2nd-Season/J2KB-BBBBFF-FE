import React from 'react'
import NavBar from '../NavBar/NavBar';
import { Table, Typography } from 'antd';

import users from "../DeleteThisData/users.json";
// 나중에는 서버에서 가져옴 (더미 데이터)

const { Title } = Typography;

function CustomerPage() {

    const columns = [
        {
          title: '등급',
          dataIndex: 'grade',
          width: 60,
          fixed: 'left'
        },
        {
          title: 'ID',
          dataIndex: 'id',
          width: 150,
          fixed: 'left'
        },
        {
          title: '이름',
          dataIndex: 'name',
          width: 100,
        },
        {
          title: '전화번호',
          dataIndex: 'phon',
          width: 175,
        },
        {
          title: '이메일',
          dataIndex: 'email',
          width: 200,
        },
        {
          title: 'Address',
          dataIndex: 'adrs',
        },
      ];

    return (
        <div>
            <NavBar />
            <div style={{width: '75%', margin: "3rem auto", textAlign: "center"}}>
                <Title level={2}>고객 정보</Title>
                 <Table bordered 
                 style={{}}
                 columns={columns} 
                 dataSource={users} 
                 pagination={{ pageSize: 50}} 
                 scroll={{ x: 1300, y: 400 }} />
            </div>
        </div>
    )
}

export default CustomerPage
