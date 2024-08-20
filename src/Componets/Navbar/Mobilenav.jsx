import React, { useState } from 'react';
import '../Styles/Mobilenav.css';
import { MdMenu } from "react-icons/md";
function Menu() {
  return (
    <div className="menu-class">
      <ul>
        <li>
        <a href="/">Home</a>
        <a  href="Shop">Shop</a>
        <a href="Accessories">Accessories</a>
        <a href="Contact">Contact</a>
        <a className="tap-me" href="Login"><button className='mlog'>Login</button></a>
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
