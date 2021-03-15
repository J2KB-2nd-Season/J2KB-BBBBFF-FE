import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar/NavBar';
import styles from "./ProductDetailPage.module.css";
import { Descriptions, Button, Tooltip } from 'antd';
import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'; 
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import { CART_SERVER } from '../config';

function ProductDetailPage(props) {
    
    const [BuyNum, setBuyNum] = useState(1)
    const [Product, setProduct] = useState("")
    const user = useSelector(state => state.user)
    
    useEffect(() => {
      setProduct(props.location.state.product)
    }, [Product, props.location.state.product])    

    const changeImg = (event) => {
      if(event.target.className === `${styles.smallImageViewer}`) {
        document.querySelector(`.${styles.bigImg}`).src = event.target.querySelector("img").src;
      } else
        document.querySelector(`.${styles.bigImg}`).src = event.target.src;
    }

    const magnify = () => {
      const bigShower = document.querySelector(`.${styles.bigShower}`);
      const bigImg = document.querySelector(`.${styles.bigImg}`);
      const ZOOM = 1.5;
      const width = 900;
      const height = 500;
      bigShower.style.width = `${width}px`;
      bigShower.style.height = `${height}px`;
      bigShower.style.background = `no-repeat url(${bigImg.src})`
      bigShower.style.backgroundColor = `white`
      bigShower.style.backgroundSize = `${width*ZOOM}px`;

      bigShower.addEventListener("mousemove", viewBigImage)

      function viewBigImage(event) {
        event.preventDefault();
        const x = event.clientX - bigShower.getBoundingClientRect().left;
        const y = event.clientY - bigShower.getBoundingClientRect().top;
        const imgX = -( x *(ZOOM-1));
        const imgY = -( y*(width * ZOOM * bigImg.height / (bigImg.width * height)) - y );
        bigShower.style.backgroundPosition = `${imgX}px ${imgY}px`;
      }
    }

    const hideShower = (event) => {
      event.target.style.width = 0;
      event.target.style.height = 0;
    }

    const handleMinus = () => {
      if(BuyNum > 1) {
        setBuyNum(BuyNum-1);
      }
    }

    const handlePlus = () => {
      if(BuyNum < Product.prod_stock) {
        setBuyNum(BuyNum+1);
      }
    }

    const addToCart = () => {
      console.log(user)
      if(!user.userData.isAuth) {
        alert('로그인을 먼저 해 주세요.')
        props.history.push('/login')
      } else {
        const data = {
          "cartQuan": BuyNum,
          "prodNum": Product.prod_num,
          "memberId": 'admin'
        }
        axios.post(`${CART_SERVER}/addToCart`, data).then(response => {
          if(response.data === 'success') {
            const answer = window.confirm('장바구니에 성공적으로 담겼습니다.\n장바구니 페이지로 이동할까요?')
            if(answer) {
              props.history.push('/cart')
            }
          } else {
            alert('장바구니 담기에 실패하였습니다.')
          }
        })
      }
    }


    if(Product.prod_name) {
      return (
        <div>
          <Helmet>
              <title>{Product.prod_name}</title>
          </Helmet>
          <NavBar/>
          <div className={styles.container}>
              <div>
                <h2>{Product.prod_name}</h2>
              </div>
              <div className={styles.product}>
                <div className={styles.photos}>
                  <div className={styles.imageViewer} onClick={magnify}>
                    <img id="shower" className={styles.bigImg} src={`../${Product.prod_image}`} alt="큰이미지"/>
                  </div>
                  <div className={styles.bigShower} onClick={hideShower}/>
                  상단 이미지를 눌러 확대할 수 있습니다.
                  <div className={styles.smallImages}>
                    <div key={Product.prod_image} className={styles.smallImageViewer} onClick={changeImg}>
                      <img className={styles.smallImg} onClick={changeImg} src={`../${Product.prod_image}`} alt="작은이미지"></img>
                    </div>
                  </div>
                </div>
                <div>
                  <Descriptions bordered
                    size="small"
                    title="Product Info 제품정보" 
                    labelStyle={{width: '100px'}}
                    contentStyle={{width: '400px'}}>
                    <Descriptions.Item label="상품명" span={3}>{Product.prod_name}</Descriptions.Item>
                    <Descriptions.Item label="상품번호" span={3}>{Product.prod_num}</Descriptions.Item>
                    <Descriptions.Item label="재고" span={3}>{Product.prod_stock}</Descriptions.Item>
                    <Descriptions.Item label="상품설명" span={3}>{Product.prod_detail}</Descriptions.Item>
                  </Descriptions>
                  <br/>
                  <Descriptions bordered
                    title="Price Info 가격정보"
                    labelStyle={{width: '100px'}}
                    contentStyle={{width: '400px'}}>
                    <Descriptions.Item label="판매가" span={3}>{Product.prod_price}원</Descriptions.Item>
                  </Descriptions>
                    <div className={styles.calInfo}>
                      <div className={styles.calculator}>
                        <p className={styles.calTit}>{Product.prod_name}</p>
                        <Button onClick={handleMinus}>
                          <MinusOutlined />
                        </Button>
                        <p className={styles.calNum}>{BuyNum}</p>
                        <Button onClick={handlePlus}>
                          <PlusOutlined />
                        </Button>                    
                      </div>
                      <h1>총 {Product.prod_price*BuyNum}원</h1>
                    </div>
                    <div className={styles.buttons}>
                      <button className={styles.buyButton}>바로주문</button>
                      <Tooltip title='장바구니 담기'>
                        <Button style={{height: '50px'}} onClick={addToCart}>
                            <ShoppingCartOutlined style={{fontSize:"25px"}}/>
                        </Button>
                      </Tooltip>
                    </div>
                </div>
              </div>
          </div>
        </div>
        
      );
    } else {
      return (<div>
        <NavBar/>
        Loading...
      </div>)
    }

    
}
  
export default withRouter(ProductDetailPage);