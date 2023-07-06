import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard'
import { fetchProducts } from '../store/ProductsSlice';

export const Products = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchProducts())
  }, [dispatch])

  const {products} = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      {
        products.map(p=><ProductCard data={p} key={p.id}/>)
      }
      
    </div>
  )
}
