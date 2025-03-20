import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
import Search from '../Search/Search'
import Items from '../../Items/Items'
import Nokia_Products from '../Source/Nokia'
import '../Styles/Nokia.css'
import PhoneBar from '../Navbar/PhoneBar'
import { FaWhatsapp } from "react-icons/fa";
import MobileNav from '../Navbar/Mobilenav'
const Nokia = () => {
  const [searchTerm , setSearchTerm] = useState("");

  return (
    <>
        <Navbar/>
        <PhoneNavBar/><MobileNav/>
        <PhoneBar/>
        <div className="popular">
        <h2>POPULAR Nokias</h2>
        <hr className='hr'/>
        <input className="saka3"type='text' placeholder='search phone.....'onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>
            <div className="popular-item">
               {/* {Nokia_Products.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} details={item.details}/>
        })}*/}
            </div>
            <div className="Nokia-container">
                {
                  Nokia_Products.filter((val)=>{
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
                        <a href="https://wa.me/+254746429881"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"> <button className='order'><FaWhatsapp className='whts'/> Order Now</button></a>

                      </div>
                    )
                  })
                }
              </div>
    </div>

    </>
  )
}

export default Nokia