import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar/NavBar';
import styles from "./ProductDetailPage.module.css";
import { Descriptions, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'; 
import { Helmet } from 'react-helmet';

function ProductDetailPage(props) {
    
    const [BuyNum, setBuyNum] = useState(1)

    const [Product, setProduct] = useState("")
    
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
      if(BuyNum < Product.stock) {
        setBuyNum(BuyNum+1);
      }
    }

    if(Product.name) {
      return (
        <div>
          <Helmet>
              <title>{Product.name}</title>
          </Helmet>
          <NavBar/>
          <div className={styles.container}>
              <div>
                <h2>{Product.name}</h2>
              </div>
              <div className={styles.product}>
                <div className={styles.photos}>
                  <div className={styles.imageViewer} onClick={magnify}>
                    <img id="shower" className={styles.bigImg} src={Product.images[0]} alt="큰이미지"/>
                  </div>
                  <div className={styles.bigShower} onClick={hideShower}/>
                  상단 이미지를 눌러 확대할 수 있습니다.
                  <div className={styles.smallImages}>
                    {Product.images.map( src => (
                          <div key={src} className={styles.smallImageViewer} onClick={changeImg}>
                            <img className={styles.smallImg} onClick={changeImg} src={src} alt="작은이미지"></img>
                          </div>
                    ))}
                  </div>
                </div>
                <div>
                <Descriptions bordered
                  size="small"
                  title="Product Info 제품정보">
                  <Descriptions.Item label="상품명" span={3}>{Product.name}</Descriptions.Item>
                  <Descriptions.Item label="상품번호" span={3}>{Product.num}</Descriptions.Item>
                  <Descriptions.Item label="재고" span={3}>{Product.stock}</Descriptions.Item>
                  <Descriptions.Item label="상품설명" span={3}>{Product.detail}</Descriptions.Item>
                </Descriptions>
                <br/>
                <Descriptions bordered
                  title="Price Info 가격정보">
                  <Descriptions.Item label="판매가" span={3}>{Product.price}원</Descriptions.Item>
                </Descriptions>
                  <div className={styles.calInfo}>
                    <div className={styles.calculator}>
                      <p className={styles.calTit}>{Product.name}</p>
                      <Button onClick={handleMinus}>
                        <MinusOutlined />
                      </Button>
                      <p className={styles.calNum}>{BuyNum}</p>
                      <Button onClick={handlePlus}>
                        <PlusOutlined />
                      </Button>                    
                    </div>
                    <h1>총 {Product.price*BuyNum}원</h1>
                  </div>
                  <div className={styles.buttons}>
                    <button className={styles.buyButton}>바로주문</button>
                    <button className={styles.cartButton}>
                     <img alt="cart" src="https://image.flaticon.com/icons/png/512/126/126083.png" style={{width: "100%"}}/>
                    </button>
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
  
export default ProductDetailPage;