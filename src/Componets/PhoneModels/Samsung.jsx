import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
//import Search from '../Search/Search'
import Items from '../../Items/Items'
import Samsung_Products from '../Source/Samsung'
import PhoneBar from '../Navbar/PhoneBar'

import './Samsung.css'
import { MdSlowMotionVideo } from "react-icons/md";
import MobileNav from '../Navbar/Mobilenav'


const Samsung = () => {
  const [searchTerm , setSearchTerm] = useState("");
  return (
    <>
    <Navbar/>
    <PhoneNavBar/><MobileNav/>
    <PhoneBar/>
    <div className="popular1">
        <h2 className='sam-h2'>POPULAR Samsungs</h2>
        {
         Samsung_Products.map(products=>(
          <Items data={products} id={products.id}/>
         ))
        }
          {/* <input className="sm-search"type='text' placeholder='search phone.....'onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>
          <div className="template-container">
                {
                  Samsung_Products.filter((val)=>{
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
                        <button className='buy'>Add to cart</button>
                      </div>
                    )
                  })
                }
              </div>
            <div className="popular-item">
               {/* {Samsung_Products.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} details={item.details}/>
        })}
            </div>*/}
        
    </div>
        <div className="left-side">
         <a href="https://www.youtube.com/watch?v=_Cf_Thff044&pp=ygUOTGF0ZXN0IFNhbXN1bmc%3D" target='blank'> <MdSlowMotionVideo className='video-link'/></a>
        </div>
   
    </>
  )
}

export default Samsung