import React from 'react'
import Items from '../Items/Items'

const ProductList = ({product,addToCart}) => {    
  return (
    <>
      <h2>Products</h2>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button className="add"onClick={() => addToCart(product)}>Add to Cart</button>
    </>
  )
}

export default ProductList