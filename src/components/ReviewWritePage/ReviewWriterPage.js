import React from 'react'
import { Typography } from 'antd';
import NavBar from '../NavBar/NavBar';
import { Helmet } from 'react-helmet';
import WritingForm from "../utils/WritingForm"

const {Title} = Typography

function ReviewWriterPage(props) {

    const list = props.location.state.products.map(product => ({
        value: product.num, name: product.name
    }))

    return (
        <React.Fragment>
            <Helmet>
                <title>후기 작성</title>
            </Helmet>
            <NavBar/>
            <div style={{width: '75%', minWidth: 600, maxWidth: 1000, margin: "2rem auto", padding: "1rem", textAlign: "center"}}>
                <Title level={3}>후기 작성</Title>
                <br/>
                <WritingForm list={list} index="상품명"/>
            </div>
        </React.Fragment>
        
    )
}

export default ReviewWriterPage
