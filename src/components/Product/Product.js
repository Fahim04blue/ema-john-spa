import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    
    const{name,img,seller,price,stock}=props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-name'>
                <h3>{name}</h3>
                <h6>by:{seller}</h6>
                <h4>${price}</h4>
                <p>only {stock} left in stock - order soon </p>
                <button onClick={()=>props.handleAddProduct(props.product)} className='cart-btn'> <FontAwesomeIcon icon={faShoppingCart} /> add to card</button>  
                {/* props.handleAddProduct arrow function er bhitor rakha hoise because
                oita jate automatic execute na hoye jay . Arrow function e rbhitor na rakhle agei oita function call kore fele so Click dewar agei execute hoye jay. handleProduct er ekta parameter pass kora lagtese because amra certain ekta product target kortesi so button click hoile jate oi product tai select hoy  */}
            </div>
            
            
        </div>
    );
};

export default Product;