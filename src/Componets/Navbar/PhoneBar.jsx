import React, { useState } from 'react';
import './PhoneBar.css'
import { FaAngleRight } from "react-icons/fa";
function Menu() {
  return (
    <div className="menu-class1">
      <ul>
        <li>
        <a href="iPhones">iPhone</a>
        <a  href="Vivos">Vivo</a>
        <a href="Nokia">Nokia</a>
        <a href="Samsung">Samsung</a>
        <a href="Oppo">Oppo</a>
        <a  href="Tecno">Tecno</a>
        <a href="Infinix">Infinix</a>
        <a href="Realme">Realme</a>
        
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
        <FaAngleRight/>
        </button>
        {menuVisible && <Menu />}
      </div>
    </div>
  );
}

export default PhoneBar;
