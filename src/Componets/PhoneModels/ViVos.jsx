import React from 'react'
import '../../Componets/Styles/ViVos.css'
import Vivo_Products from '../Source/Vivo'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
import Navbar from '../Navbar/Navbar'
import Items from '../../Items/Items'
//import Search from '../Search/Search'
import { useState } from 'react'
//import Vivo from '../Assets/Vivos/VLarge2 .jpeg'
import { MdSlowMotionVideo } from "react-icons/md";
import Cart from '../../Pages/Cart'
import PhoneBar from '../Navbar/PhoneBar'
const ViVos = () => {
  
  const [searchTerm , setSearchTerm] = useState("");
  return (
    <>
    <Navbar/>
    <PhoneNavBar/>
    <PhoneBar/>
    <div className="popular1">
        {/*<img src={Vivo} alt="" />*/}
        <h2>POPULAR ViVos</h2>
        
        {
          Vivo_Products.map((product)=>(
            <Items data={product} id={product.id}/>
          ))
        }
       {/* <input type='text' placeholder='search phone.....'className="search-bar"onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>
        <div className="template-container">
                {
                  Vivo_Products.filter((val)=>{
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
                        <h3 className='new'> Now: Ksh {val.new_price}</h3>
                        <h3 className='old'>Then: Ksh {val.old_price}</h3>
                        <h3 className='Details'>Details: {val.details}</h3>
                        <button onClick={()=> addToCart(val.id)}
                        className='buy'>Add to Cart</button>
                      </div>
                    )
                  })
                }
              </div>
          {/*<div className="popular-item">
            {Vivo_Products.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} details={item.details}/>
            })}
          </div>*/}
    </div>
    <div className="left-side">
          
         <a href="https://www.youtube.com/watch?v=yAEaeHXQnaU&pp=ygULbGF0ZXN0IHZpdm8%3D" target='blank'> 
         <img src="https://www.phoneplacekenya.com/wp-content/uploads/2024/07/Vivo-Y28-4G-768x768.jpg"alt="" />
         <MdSlowMotionVideo className='video-link'/>
         <p>Watch Video For details</p>
         </a>
         
        </div>
       

    </>
  )
}

export default ViVos