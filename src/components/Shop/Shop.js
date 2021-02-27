import React, { useContext, useState } from 'react';
import {ShopInfo} from '../../ShopContext'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useContext(ShopInfo)
    
    const [cart,setCart] =useState([])

    const handleAddProduct = (product) =>{ // handleAddProduct func e amra ekta parameter nisi bcz parameter/props ta diye amra exact product ta ke target kortesi.
    const newCart=[...cart,product]; // basically eikhane button click e cart ta update hobe as cart ta ekta array cz oikahne product gula je ashbe oigula o eketa array so newCart er bhitor spread op use kore previous cart (initially empty) ar prameter product which is saying kon product click hoise oita eksathe kore new ekta array hoye gese eikahne
    setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                
                {
                    products.map(product=><Product 
                    handleAddProduct={handleAddProduct} // Here we are passing the onClick  event handler as props . Shop.js er child componenet hocche product and oitar moddhe button ase as amra chaitesi button click korle state change hoieb tai shop.js e event handler er fucntion ta likhtesi bcz amader state ta eikahne ase sop Parent theke child componenet e event handler hocche property/props diye pass kora lage jeta korsi eikahen amra. Product component e ekta handleAddProduct attribute likhe props ta pass kore dilam .//
                    product={product}
                    ></Product>)
                }
                
            </div>

            <div className='cart-container'>
                <Cart items={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;