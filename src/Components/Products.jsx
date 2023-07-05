import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

export const Products = () => {
  const {products}= useSelector(state => state.product)
  console.log(products);
  return (
    <div >
      {
        products.map(p=><ProductCard data={p} key={p.id}/>)
      }
      
    </div>
  )
}
