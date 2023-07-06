import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Products from './Components/Products'
import Layout from './Components/layout'
import { Products } from './Components/Products'
import Cart from './Components/Cart'

function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Products />} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
