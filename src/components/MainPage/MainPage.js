import React from 'react';
import { Row, Col, Card } from 'antd';
import ImageSlider from '../utils/ImageSlider';
import './MainPage.css';
import 'antd/dist/antd.css';
import '../input.css';
import NavBar from '../NavBar/NavBar';
import { Link }from "react-router-dom";
import { Helmet } from 'react-helmet';
import products from "../DeleteThisData/products.json";

{
    /* 나중에는 products 서버에서 가져옴(더미 데이터) */
}

const { Meta } = Card;


function Main() {


    const renderCards = products.map((product, index) => {
        return (
            <Col key={index} lg={6} md={8} xs={24}>
                <Link to={{
                    pathname: `/product/${product.prod_num}`,
                    state: {
                        product:product
                    }
                }}>
                    <Card cover={<ImageSlider images={[product.prod_image]}/>} >
                        <Meta title={product.prod_name} 
                        description={product.prod_detail.length >= 30 
                        ? product.prod_detail.substr(0,30) + '...' : product.prod_detail} />
                    </Card>
                </Link>
            </Col>
        );
    });

    return (
        <div id="wrap">
            <Helmet>
                <title>J2KB</title>
            </Helmet>
            <NavBar />
            <div className="banner">
                <p>배너</p>
            </div>
            <div className="contents" style={{ width: '55%', margin: '3rem auto' }}>
                <Row gutter={[20, 20]}>{renderCards}</Row>
            </div>
        </div>
    );
}

export default Main;
