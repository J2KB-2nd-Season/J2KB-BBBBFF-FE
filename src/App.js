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
import CartPage from './components/CartPage/CartPage';
import ServicePage from './components/ServicePage/ServicePage';
import ReviewWriterPage from './components/ReviewWritePage/ReviewWriterPage';
import Auth from './hoc/auth';
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
                <Route exact path="/" component={Auth(MainPage, null)} />
                <Route exact path="/login" component={Auth(LoginPage, false)} />
                <Route exact path="/join" component={Auth(JoinPage, false)} />
                <Route exact path="/find/id" component={Auth(IdFind, false)} />
                <Route exact path="/find/password" component={Auth(PwFind, false)} />
                <Route exact path="/product/upload" component={Auth(UploadProductPage, true, true)} />
                <Route exact path="/product/:product_num" component={Auth(ProductDetailPage, null)} />
                <Route exact path="/admin" component={Auth(AdminPage, true, true)} />
                <Route exact path="/admin/customer" component={Auth(CustomerPage, true, true)} />
                <Route exact path="/cart" component={Auth(CartPage, true)} />
                <Route exact path="/service" component={Auth(ServicePage, null)} />
                <Route exact path="/write/review" component={Auth(ReviewWriterPage, true)} />
            </Switch>
        </Router>
    );
}

export default App;
