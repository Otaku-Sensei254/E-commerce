import React ,{useState}from 'react'
import Navbar from '../Navbar/Navbar'
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar'
import Search from '../Search/Search'
import Realme_products from '../Source/Realme'
import '../Styles/Realme.css'
import PhoneBar from '../Navbar/PhoneBar'
import { FaWhatsapp } from "react-icons/fa";
import MobileNav from '../Navbar/Mobilenav'
const Realme = () => {
  const [searchTerm , setSearchTerm] = useState("");

  return (
    <>
    <Navbar/>
    <PhoneNavBar/><MobileNav/>
    <PhoneBar/>
    <input className="sm-search"type='text' placeholder='search phone.....'onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>
      <div className="template-container">
        <div className="realme">
          {
                  Realme_products.filter((val)=>{
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
                        <p className='p-dets'>{val.details}</p>
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

export default Realme