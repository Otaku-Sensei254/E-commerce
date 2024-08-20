import React from 'react'
import '../Styles/Popular.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import iphone_product from '../Source/IphoneData'
import Items from '../../Items/Items'
const Popular = () => {
  return (
    <>
    <Navbar/>
    <Search/>
    <div className="popular">
        <h2>POPULAR IPHONES</h2>
        <hr/>
          <div className="popular-item">
            {iphone_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
          </div>
    </div>
    </>
  )
}

export default Popular