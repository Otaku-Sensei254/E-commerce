import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
const Rout = ({addtocart}) => {
  return (
    <>
        <Routes>
            <Route path='/cart' element={<Cart addtocart={addtocart}/>}/>
        </Routes>
    </>
  )
}

export default Rout