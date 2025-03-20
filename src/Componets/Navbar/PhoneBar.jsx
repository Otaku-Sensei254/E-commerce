import React, { useState } from 'react';
import './PhoneBar.css'
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <div className="menu-class1">
      <ul>
        <li>
        <Link to="/iPhones">iPhone</Link>
        <Link  to="/Vivos">Vivo</Link>
        <Link to="/Nokia">Nokia</Link>
        <Link to="/Samsung">Samsung</Link>
        <Link to="/Oppo">Oppo</Link>
        <Link  to="/Tecno">Tecno</Link>
        <Link to="/Infinix">Infinix</Link>
        <Link to="/Realme">Realme</Link>
        
        </li>
        
      </ul>
    </div>
  );
}

function PhoneBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-item1">
      <div className="tap-menu1">
        <button onClick={toggleMenu} className="tap-me-menu1">
        <FaAngleLeft/>
        </button>
        {menuVisible && <Menu />}
      </div>
    </div>
  );
}

export default PhoneBar;
