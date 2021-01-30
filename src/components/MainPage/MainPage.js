import React, { useState } from 'react';
import { Row, Col, Card, Input } from 'antd';
import ImageSlider from '../utils/ImageSlider';
import './MainPage.css';
import 'antd/dist/antd.css';
import '../input.css';
import NavBar from '../NavBar/NavBar';
import { Link }from "react-router-dom";
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
                    pathname: `/product/${product.num}`,
                    state: {
                        product:product
                    }
                }}>
                    <Card cover={<ImageSlider images={product.images}/>} >
                        <Meta title={product.name} description={product.detail} />
                    </Card>
                </Link>
            </Col>
        );
    });

    return (
        <div id="wrap">
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
