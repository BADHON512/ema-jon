import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
const chatai = fakeData.slice(0,10)
const [count, setcount] = useState(chatai)
const [cart, setcart] = useState([])

const clickedheadelar = (product)=>{
    const newcart =[...cart, product]
    setcart(newcart)
    
}
    
    return (
        <div className='shop-container' >
            <div className='product-container'>
           {
               count.map(sob=><Product
                clickedheadelar={clickedheadelar}
                product={sob}></Product>)
           }
            </div>
            <div className='cart-container'>
                <h3>This is a cart</h3>
               
             <Cart name={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;