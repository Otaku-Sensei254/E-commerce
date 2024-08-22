import React from 'react'
import Navbar from '../Componets/Navbar/Navbar'
import '../Componets/Styles/Cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    <>
    <Navbar/>
    <div className="cart-container">
      <h1>Your Cart is empty</h1>
      <Link to="/Shop"><button className='back'>Go to Shop</button></Link>
    </div>
    </>
  )
}

export default Cart