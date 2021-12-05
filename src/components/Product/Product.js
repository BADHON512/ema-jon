import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import'./Product.css'

const Product = (props) => {
    
    const {name, img, seller,price, stock} = props.product;
    return (
        <div className='product'>
            <div>
             <img src={img} alt="" /> 
            </div>
            <div className="product-name">
               <h3 style={{color:'blue'}} >{name}</h3> 
               <p><small>by : {seller}</small></p>
               
               <p><small>${price}</small></p>
               
               <p><small> only {stock} left in stock -order sood</small></p>
               <button className="button" onClick={()=> props.clickedheadelar(props.product)}>  <FontAwesomeIcon icon={faShoppingCart} />Add your cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;