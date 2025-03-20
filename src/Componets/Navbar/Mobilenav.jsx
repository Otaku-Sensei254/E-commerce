import React, { useState } from 'react';
import '../Styles/Mobilenav.css';
import { MdMenu } from "react-icons/md";
import {Link} from 'react-router-dom'
function Menu() {
  return (
    <div className="menu-class">
      <ul>
        <li>
        <Link to="/">Home</Link>
        <Link  to="/Shop">Shop</Link>
        <Link to="/Accessories">Accessories</Link>
        <Link to="/Contact">Contact</Link>
        <Link className="tap-me" to="/Login"><button className='mlog'>Login</button></Link>
        </li>
        
      </ul>
    </div>
  );
}

function MobileNav() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-item">
      <div className="tap-menu">
        <button onClick={toggleMenu} className="tap-me-menu">
        <MdMenu/>
        </button>
        {menuVisible && <Menu />}
      </div>
    </div>
  );
}

export default MobileNav;
