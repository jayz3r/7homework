import React from 'react'
import { useSelector } from 'react-redux';
// import './Layout.css'
import {NavLink, Outlet} from "react-router-dom";

const activeMenuClass = ({ isActive }) => isActive ? "active-menu" : "";

const Layout = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <>
    <nav>
        <ul className='headerLinks'>
          <li>
            <NavLink to={"/"} className={activeMenuClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"} className={activeMenuClass}>
              Корзина {cartTotalQuantity}
            </NavLink>
          </li>
        </ul> 
      </nav>
      <div className='container'>
        <Outlet/>
      </div>
      </>
  )
}

export default Layout