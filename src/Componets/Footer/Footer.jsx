import React from 'react'
import './Footer.css'
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Img1 from '../Assets/iPhones/iPHN_RED.jpeg'
import Img2 from '../Assets/Samsungs/S24ULTRA.jpeg'
import Img3 from '../Assets/Vivos/V20SE.jpeg'
import Img5 from '../Assets/Oppos/A57.jpeg'
import Img4 from '../Assets/Onsale/S20ULTRA.jpeg'
import Img6 from '../Assets/RealMe/Realme-C55.jpg'
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Logo from '../Assets/logo.jpeg'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <div className="footer-section">
          <img className="Fl"src={Logo} alt="" />
            <div className="footer-left">
              <h1>Get in touch <FaPhone/></h1>
              <ul>
              <li><FaPhone/>+254 746 429881</li>
              <li><FaEnvelope/> shifayenterprises47@gmail.com</li>
              <li><CiLocationOn/>Luthuli Avenue , Nairobi, Kenya</li>  
              </ul>
              
              <div className="socials"></div>
            </div>
            <div className="subscribe">
              <form className='email-sub'>
                <input type="email" placeholder='Join Our Community' className='join' />
              <button type='submit' className='sub'>Subscribe</button>
              </form>
              
            </div>
            <div className="footer-right">
                  <div className="gallery">
                    <h5 className='gp'>our phone gallery</h5>
                    <div className="image-grid">
                      <img src={Img1} alt="" />
                      <img src={Img2} alt="" />
                      <img src={Img3} alt="" />
                      <img src={Img4} alt="" />
                      <img src={Img5} alt=""/>
                      <img src={Img6} alt=""/>
                    </div>
                  </div>
                   <h4 className='links'>Contact us via our Socials</h4> 
              <div className="icons">  
                <Link to="https://web.facebook.com/shifayeee"><FaFacebookF className='facebk'/></Link> 
                <Link to="https://wa.me/+254746429881" target='blank'><FaWhatsapp className='Whatsapp'/></Link> 
                <Link to="https://www.instagram.com/shifaye_enterprises/?utm_source=ig_web_button_share_sheet" target='blank'><SlSocialInstagram className='insta'/></Link> 
                </div>
                <div className="copy">
                  <p className='cpy'>Shifaye Enterprise <br/> copyright@2024 by D-Huhu Inc </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer