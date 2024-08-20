import React from 'react'
import '../Offers/Offers.css'
import {Link} from 'react-router-dom'
const Offers = () => {
  return (
    <>
      <div className="offers">
        <div className="offers-left">
          <h1>Hot Incomings</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON SHIFAYE ENTERPRISE</p>
          <Link to="/Shop"><button className='check-btn'>Shop Now</button></Link>
        </div>
        <div className="offers-right">
          <img  className="Ex-Pick"src="https://www.phoneplacekenya.com/wp-content/uploads/2024/07/Phone-Place-Preoder-Za-1.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Offers