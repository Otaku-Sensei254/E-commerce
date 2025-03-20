import React, { useState } from 'react'
import './Navbar.css'
import { IoCartOutline } from "react-icons/io5";
import Logo from '../Assets/logo.jpeg'
import { Link } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  const [menu,setMenu] = useState("Home")
  return (
    <>
    <div className='navbar'>
      <div className="nav-logo">
        <Link to="/"><img className="logo"src={Logo} alt="" /></Link>
          <p>SHIFAYE ENTERPRISE</p>
      </div>
        <ul className="nav-links">
          <li><Link onClick={()=>{setMenu("Home")}} to="/">Home{menu==="Home"?<hr/>:<></>}</Link></li>
          <li><Link to ="/Shop"onClick={()=>{setMenu("Shop")}} href="/Shop">Shop{menu==="Shop"?<hr/>:<></>}</Link></li>
          <li><Link to ="/Accessories"onClick={()=>{setMenu("Accessories")}} href="/Accessories">Accessories{menu==="Accessories"?<hr/>:<></>}</Link></li>
          <li><Link to ="/Contact"onClick={()=>{setMenu("Phones")}} href="/Contact">Contact us{menu==="Phones"?<hr/>:<></>}</Link></li>
        </ul>
          <div className="login-cart">
            <Link to="/Login"><button className='Login-btn'>Login</button></Link>
            <Link to="/Cart"><IoCartOutline className='Cart-icon'/></Link>
            <div className="nav-cart-count">0</div>
          </div>
          
    </div>
    </>
  )
}

export default Navbar