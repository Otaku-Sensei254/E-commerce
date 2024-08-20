import React from 'react'
import '../Componets/Styles/Shop.css'
import OPPO from '../Componets/Assets/Onsale/OPPO.jpeg'
import PODS from '../Componets/Assets/Onsale/PODS.jpeg'
import S20ULTRA from '../Componets/Assets/Onsale/S20ULTRA.jpeg'
import SmartWatch from '../Componets/Assets/Onsale/Smart-watch.jpeg'
import PhoneNavBar from '../Componets/PhoneNavBar/PhoneNavBar'
import Navbar from '../Componets/Navbar/Navbar'
import iphone_product from '../Componets/Source/IphoneData'
import Items from '../Items/Items'
import Search from '../Componets/Search/Search'
import All_Products from '../Componets/Source/All_Products'
import { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import MobileNav from '../Componets/Navbar/Mobilenav'
import PhoneBar from '../Componets/Navbar/PhoneBar'
//import Popular from '../Componets/Popular/Popular'

const Shop = () => {
  const[searchTerm, setSearchTerm] =useState("");
  
  return (
    <>
    <Navbar/>
    <MobileNav/>
    <PhoneNavBar/>
    <PhoneBar/>
   
      <h2 className='hot'> Hot Products On Offer!!!🔥🔥</h2>
    <div className="on-sale-products">
          <div className="item-sale-1">
            <img src={OPPO} alt="" />
            <p>Oppo 5G</p>
            <h4 className='now'>Now: KSH 20,000</h4>
            <h4 className='then'>Then: KSH 28,000</h4>
            <button className='order'> <FaWhatsapp className='whts'/>Order Now</button>
          </div>
          <div className="item-sale-2">
            <img src={PODS} alt="" />
            <p>Samsung Galaxy Buds</p>
            <h4 className='now'>Now: KSH 10,000</h4>
            <h4 className='then'>Then: KSH 13,000</h4>
            <button className='order'> <FaWhatsapp className='whts'/>Order Now</button>

          </div>
          <div className="item-sale-3">
            <img src={S20ULTRA} alt="" />
            <p>Samsung S23 ULTRA</p>
            <h4 className='now'>Now: KSH 95,000</h4>
            <h4 className='then'>Then: KSH 105,000</h4>
            <button className='order'> <FaWhatsapp className='whts'/>Order Now</button>

          </div>
          <div className="item-sale-4">
            <img src={SmartWatch} alt="" />
            <p>Smart Watch</p>
            <h4 className='now'>Now: KSH 7,000</h4>
            <h4 className='then'>Then: KSH 10,000</h4>
            <button className='order'> <FaWhatsapp className='whts'/>Order Now</button>

          </div>
    </div>
    {/*<Popular/>*/}
    <div className="popular">
       {/* <h2>POPULAR IPHONES</h2>
        <hr/>
          <div className="popular-item">
            {iphone_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
          </div>*/}
    </div>
      <div className="products">
      <div className="template-container2">
                {
                  All_Products.filter((val)=>{
                    if(searchTerm == ""){
                      return val;
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  })
                  .map((val)=>{
                    return(
                      <div className='result-template'key={val.id}>
                        <img src={val.image} alt="" />
                        <h3>{val.name}</h3>
                        <h3 className='new'>Ksh {val.new_price}</h3>
                        <h3 className='old'>Ksh {val.old_price}</h3>
                        <button className='order'><FaWhatsapp className='whts'/> Order Now</button>
                      </div>
                    )
                  })
                }
              </div>
       
      </div>
     
    </>
  )
}

export default Shop