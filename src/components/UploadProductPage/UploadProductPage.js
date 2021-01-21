import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DropZone from '../utils/dropZone';
import { Input, Button } from 'antd';

const { TextArea } = Input;

let Continents = [
    { key: 1, value: '1' },
    { key: 2, value: '2' },
    { key: 3, value: '3' },
    { key: 4, value: '4' },
    { key: 5, value: '5' },
    { key: 6, value: '6' },
    { key: 7, value: '7' },
    { key: 8, value: '8' },
    { key: 9, value: '9' },
    { key: 10, value: '10' },
];

function UploadProductPage(props) {
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Price, setPrice] = useState(0);
    const [Continent, setContinent] = useState(1);
    const [Image, setImage] = useState([]);

    const onTitleHandler = (e) => {
        setTitle(e.currentTarget.value);
    };
    const onDescriptionHandler = (e) => {
        setDescription(e.currentTarget.value);
    };
    const onPriceHandler = (e) => {
        setPrice(e.currentTarget.value);
    };

    const onContinentHandler = (e) => {
        setContinent(e.currentTarget.value);
    };

    const onSubmithandler = (e) => {
        e.preventDefault();
        if (!Title || !Description || !Price || !Continent) {
            alert('모든 값을 넣어 주세요!');
        } else {
            alert('성공!');
            // 메인으로 이동
            props.history.push('/');
        }
    };

    return (
        <div style={{ width: '750px', margin: '3rem auto' }}>
            <Helmet>
                <title>상품 등록 페이지</title>
            </Helmet>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem' }}>Product Upload</h1>
            </div>
            <br />
            <form onSubmit={onSubmithandler}>
                <DropZone />
                <br />
                <br />
                <label>이름</label>
                <Input value={Title} onChange={onTitleHandler} />
                <br />
                <br />
                <label>설명</label>
                <TextArea value={Description} onChange={onDescriptionHandler} />
                <br />
                <br />
                <label>가격</label>
                <Input value={Price} onChange={onPriceHandler} />
                <br />
                <br />
                <label>카테고리</label>
                <br />
                <select value={Continent} onChange={onContinentHandler}>
                    {Continents.map((item) => (
                        <option key={item.key} value={item.key}>
                            {item.value}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <Button htmlType="submit">확인</Button>
            </form>
        </div>
    );
}

export default withRouter(UploadProductPage);
