import React, { useContext, useState } from 'react'
import '../Styles/Iphones.css'
import iphone_product from '../Source/IphoneData'
import Items from '../../Items/Items'
import Navbar from '../Navbar/Navbar'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
import PhoneBar from '../Navbar/PhoneBar'
import Search from '../Search/Search'
//import { useCart}from 'react-use-cart'
import Cart from '../../Pages/Cart'

const Iphones = () => {
  
  
  
  return (
    <>
    <Navbar/>
    <PhoneNavBar/>
    <PhoneBar/>
    
<div className="popular">
        <h2>POPULAR IPHONES</h2>
        <hr/>
          <div className="popular-item">
          {/*  {iphone_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}*/}
          </div>

          <div className="i-container">
             {
                iphone_product.map(cul=>(
                  <Items data={cul} id={cul.id}/>
                ))
               }
          </div>
              
                
    </div>
    </>
  )
}

export default Iphones