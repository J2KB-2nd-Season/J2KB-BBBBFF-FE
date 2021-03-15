export const USER_SERVER = process.env.NODE_ENV !== "production" 
                                                ? '/api/users' : 'http://118.67.128.131:8080/api/users';
export const CART_SERVER = process.env.NODE_ENV !== "production" 
                                                ? '/api/cart' : 'http://118.67.128.131:8080/api/cart';

export const PRODUCT_SERVER = '/api/product';
