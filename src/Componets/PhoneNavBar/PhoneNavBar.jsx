import React from 'react'
import './PhoneNavBar.css'
import {Link} from 'react-router-dom'
const PhoneNavBar = () => {
  return (
    <>
        <div className="phone-nav">
            <ul className='model-links'>
                <Link to="/iPhones">iPhone</Link>
                <Link to="/Vivos">ViVo</Link>
                <Link to="/Samsung">Samsung</Link>
                <Link to="/Oppo">OPPO</Link>
                <Link to="/Tecno">Tecno</Link>
                <Link to="/Nokia">Nokia</Link>
                <Link to="/Infinix">Infinix</Link>
                <Link to="/Realme">Realme</Link>
                
            </ul>
            <h/>
        </div>
    </>
  )
}

export default PhoneNavBar