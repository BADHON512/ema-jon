import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.name
    // const total= cart.reduce((total, product) => total + product.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
         total = total + element.price

        
    }
    let sheeping= 0;
    if(total > 10){
        sheeping = 40;
    }
    else if(total > 50){
        sheeping=100

    }
    const tax = total /10;
   const convet = num => {
       const bb = num.toFixed(2)
       return Number(bb)

   }
    
    return (
        <div>
            <h3>order samary: {cart.length}</h3>
            <h3>sheeping cost: {sheeping}</h3>
            <h3>tax + vat : {convet(tax)}</h3>
            <h3>Total price:{convet(total + sheeping + tax)}</h3>
            <button className='button'>Your order is Ok</button>
        </div>
    );
};

export default Cart;