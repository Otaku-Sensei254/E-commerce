import React, { createContext, useState } from 'react'
import All_Products from '../Componets/Source/All_Products';


export const ShopContext = createContext(null);
const getDefaultCart = () => {
   let cart = {}
   for ( let i=1; i < All_Products.length + 1; i++){
    cart [i] =0;
   }
   return cart;
};
 
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId]+ 1}));
    };
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId] : prev[itemId]- 1}));
    };
    const ContextValue = {cartItems,addToCart,removeFromCart}
  return (
    
    <ShopContext.Provider value={ContextValue}>
        {props.children}
    </ShopContext.Provider>

    
  )
}

export default ShopContextProvider