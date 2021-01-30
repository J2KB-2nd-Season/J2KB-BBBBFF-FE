import React from 'react';
import { Row, Col, Card, Image } from 'antd';
import '../MainPage/MainPage.css';
import 'antd/dist/antd.css';
import '../input.css';
import NavBar from '../NavBar/NavBar';
import { Link }from "react-router-dom";

const { Meta } = Card;

const contents = [
    { link: '/product/upload', title: '상품등록', 
      description: '새로운 상품을 등록합니다.',
      img: "https://image.flaticon.com/icons/png/512/126/126494.png" },
    { link: '/admin/customer', title: '고객관리', 
      description: '고객 정보를 관리합니다.',
      img: "https://image.freepik.com/free-icon/group-meeting_318-10037.jpg" }
];


function AdminPage() {


    const renderCards = contents.map((content, index) => {
        return (
            <Col key={index} lg={6} md={8} xs={24}>
                <Link to={content.link} >
                    <Card cover={<Image src={content.img} />}>
                        <Meta title={content.title} description={content.description} />
                    </Card>
                </Link>
            </Col>
        );
    });

    return (
        <div id="wrap">
            <NavBar />
            <div className="contents" style={{ width: '55%', margin: '3rem auto' }}>
                <Row gutter={[20, 20]}>
                    {renderCards}
                </Row>
            </div>
        </div>
    );
}

export default AdminPage;