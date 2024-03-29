import React from 'react';
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
import InfoChangePage from './components/InfoChangePage/InfoChangePage';
import './App.css';
//import customAxios from './customAxios';

function App() {
    return (
        <Router>
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
                <Route exact path="/changeinfo" component={Auth(InfoChangePage, true)} />
            </Switch>
        </Router>
    );
}

export default App;
