import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import JoinPage from './components/JoinPage/JoinPage';
import IdFind from './components/IdPwFind/IdFind';
import PwFind from './components/IdPwFind/PwFind';
import UploadProductPage from './components/UploadProductPage/UploadProductPage';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import AdminPage from './components/AdminPage/AdminPage';
import CustomerPage from './components/CustomerPage/CustomerPage';
import './App.css';
//import customAxios from './customAxios';

function App() {
    /* 
    const [ip, setIp] = useState('');

    // IP주소 값을 설정합니다.
    function callback(data) {
        setIp(data);
    }

    // 첫번째 렌더링을 다 마친 후 실행합니다.
    useEffect(
        () => {
        // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
        customAxios('/ip', callback);
        }, []
    );
    */

    return (
        <Router>
            {/* <header className="App-header">
                이 기기의 IP주소는 {ip}입니다.
            </header> */}
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/admin" component={AdminPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/join" component={JoinPage} />
                <Route exact path="/find/id" component={IdFind} />
                <Route exact path="/find/password" component={PwFind} />
                <Route exact path="/product/upload" component={UploadProductPage} />
                <Route exact path="/product/:product_num" component={ProductDetailPage} />
                <Route exact path="/admin/customer" component={CustomerPage} />
            </Switch>
        </Router>
    );
}

export default App;
