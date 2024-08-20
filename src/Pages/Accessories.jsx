import React from 'react'
import Acc_Data from '../Componets/Source/Accessories'
import Items from '../Items/Items'
import '../Componets/Styles/Accessories.css'
import Navbar from '../Componets/Navbar/Navbar'
import MobileNav from '../Componets/Navbar/Mobilenav'
const Accessories = () => {
  return (
    <>

    <Navbar/>
    <MobileNav/>
    <h1 className='acc-h1'>Accessories</h1>
    <div className="acc-container">
        {
       Acc_Data.map(product=>(
        <Items data={product} id={product.id}/>
       ))
    } 
    </div>
   
    </>
    
  )
}

export default Accessories