import React from 'react'
import Navbar from '../Componets/Navbar/Navbar'
import '../Componets/Styles/Contact.css'
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import Mobilenav from '../Componets/Navbar/Mobilenav'
import { Link } from 'react-router-dom';
import PhoneBar from '../Componets/Navbar/PhoneBar';
const Contact = () => {
  return (
    <>
        <Navbar/>
        <PhoneBar/>
        <Mobilenav/>
        <div className="contact-us">
            <div className="contact-head">
               <h3>Get in touch with us <FaEnvelope/></h3> 
            </div>
          <div className="left-side-contact">
          <div className="Call-us">
                <div className="icons2">
                    <a href="https://web.facebook.com/shifayeee" target='blank'><FaFacebook className='one'/>
                    </a><p className='fb-p'>Shifaye Enterprise</p>
                    <a href="https://wa.me/+254746429881" target='blank'><IoLogoWhatsapp className='two'/></a><p className='fb-p'>+254 746 429881</p>
                    <a href="https://www.instagram.com/shifaye_enterprises/?utm_source=ig_web_button_share_sheet" target='blank'><RiInstagramFill className='three'/></a><p className='fb-p'>Shifaye Enterprise</p>
                </div>
            </div>  
        </div>
            <div className="right-side-contact">
                <h2>Locate Us</h2>
                <div className="g-map">
                <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Luthuli%20Avenue+(Shifaye%20Enterprise)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
                </div>
            </div>  
        </div>
        
        
    </>
  )
}

export default Contact