import React, { useState } from 'react'
import './App.css'
import Navbar from './Componets/Navbar/Navbar'
import {Link} from 'react-router-dom'
import Search from './Componets/Search/Search'
import Offers from './Componets/Offers/Offers'
import All_Products from './Componets/Source/All_Products'
import Footer from './Componets/Footer/Footer'
import Cart from './Pages/Cart'
import { BrowserRouter as Router } from 'react-router-dom'
import Rout from './Routes/Rout'
import ShopContextProvider from './Context/ShopContext'
import AboutUs from './AboutUs'
import MobileNav from './Componets/Navbar/Mobilenav'
import PhoneBar from './Componets/Navbar/PhoneBar'
function App() {
    

  
  return (
    <>
      <ShopContextProvider>
       <Navbar/>
       <MobileNav/>
       <PhoneBar/>
        <Offers/>
         <AboutUs/>
         <Footer/>
      </ShopContextProvider>
        
      
      

    </>
  )
}

export default App
