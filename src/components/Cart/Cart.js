import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart =props.items
    console.log(cart)
    const total = cart.reduce((total,pd)=>total+pd.price,0)
     // Basically What is happening here is array reduce use kore total ta calculate korsi. Array reduce 1 by 1 array element reduce korte thake.Eikahne reduce 2 ta argument nise ekta hocche total(accumulator) and arekta holo pd(current value). Accumulator is more like the result. PD ta hocche current value. so amra basically result + current value add kore new result ta pacchi.Here 0 is a initial value . So ejokhon reduce function ta call hooche first e value 0 thaktese. 
    let shippingCost = 0 ;
    if(total>35){
        shippingCost=0;
    }
    else if(total>15){
        shippingCost=4.99;
    }
    else if(total>0){
        shippingCost=12.99;
    }
    let Tax = (total/10).toFixed(2);
    const grandTotal = (total + shippingCost + parseFloat(Tax)).toFixed(2)

    return (
        <div className='cart'>
           <h3>Order Summary</h3>
            <p>Items Ordered : {cart.length} </p>
            <p>Product Price : ${parseFloat(total) }</p>
            <p>Shipping Cost: ${shippingCost}</p>
            <p>Tax + VAT : ${Tax} </p>
            <p>Total Price : ${parseFloat(grandTotal) }</p>
        </div>
    );
};

export default Cart;