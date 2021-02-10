import React from 'react';
import { Carousel, Row, Col } from 'antd';

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay>
                {props.images.map((image, index) => (
                    <Row justify="center" align="middle" key={index}>
                        <Col
                            span={24}
                            style={{
                                margin: '0 auto',
                                width: '95%',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <img style={{ margin: '0 auto', maxHeight: '150px' }} src={image} alt={index} />
                        </Col>
                    </Row>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageSlider;
