import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './ProductsSlice'
import cartReducer from './CartSlice'

const store = configureStore({
  reducer: {
   product: productsReducer,
   cart: cartReducer
  }
})

export default store