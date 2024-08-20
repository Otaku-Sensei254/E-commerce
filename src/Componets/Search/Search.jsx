import React, { useState } from 'react'
import './Search.css'
import { IoSearch } from "react-icons/io5";
import All_Products from '../Source/All_Products';

const Search = () => {
    const[searchTerm, setSearchTerm] =useState("");

  return (
    <>
        <div className="search">
 {/* <input type="text" placeholder='search products' className='search-prod' onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>*/}
  <input type="text" placeholder='search products' className='srch-bar2' onChange={(e)=>{
    setSearchTerm(e.target.value);
  }}/>
<IoSearch className='srch-icon'/>
              </div>
              <div className="template-container">
                  <h2 className="our-12">Our Products</h2>
                {
                  All_Products.filter((val)=>{
                    if(searchTerm == ""){
                      return val;
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  })
                  .map((val)=>{
                    return(
                      <div className='result-template'key={val.id}>
                        <img src={val.image} alt="" />
                        <h3>{val.name}</h3>
                        <h3 className='new'>Ksh{val.new_price}</h3>
                        <h3 className='old'>Ksh{val.old_price}</h3>
                        <button className='buy'>Add to Cart</button>
                      </div>
                    )
                  })
                }
              </div>

    </>
  )
}

export default Search