import React from 'react'
import Navbar from '../Componets/Navbar/Navbar'
import '../Componets/Styles/Cart.css'
const Cart = () => {
  return (
    <>
    <Navbar/>
    <div className="cart-container">
      <h1>Your Cart is empty</h1>
      <a href="/Shop"><button className='back'>Go to Shop</button></a>
    </div>
    </>
  )
}

export default Cart