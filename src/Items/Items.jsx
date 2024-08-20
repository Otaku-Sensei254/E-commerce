import React, { useContext } from 'react'
import './Items.css'
import ShopContextProvider from '../Context/ShopContext'
import { FaWhatsapp } from "react-icons/fa";

const Items = (props) => {
  const {id,name,new_price,old_price,image}=props.data;
  //const { addToCart } = useContext(ShopContextProvider)
  return (
    <div className='container'>    
    <div className="items">
      <div className="item">
        <img src={image} alt="" />
        <p>{name}</p>
        <div className="item-prices">
          <div className="item-price-new">
            Ksh{new_price}
          </div>
          <div className="item-price-old">
           Ksh {old_price}
          </div>
            <div className="dets">
            </div>
      </div> 
      <div className="buy-buttons">
          <a 
        href="https://wa.me/+254746429881"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
          >
            <button className='order'><FaWhatsapp className='whts'/>  Order Now</button></a>
      </div>
      
      </div>
        
    </div>
      
    </div>
  )
}

export default Items