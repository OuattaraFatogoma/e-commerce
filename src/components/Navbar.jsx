import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaShoppingBag } from "react-icons/fa";
import logo from "../images/logo.png";
import { useGlobalContext } from '../utils/context';

function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const {toggleSidebar, cart} =useGlobalContext();

  return (
    <nav className='navbar'>
       <div className='nav-center'>
        <div className='nav-header'>
          <Link to="/"><img src={logo} alt='cara logo'/></Link>
          <button className='toggle-sidebar' onClick={toggleSidebar}><FaBars /></button>
        </div>

        <ul className='nav-links'>
          <li className={path==="/" ?"active":""}>
            <Link to="/">Home</Link>
          </li>
          <li className={path==="/about" ?"active":""}>
            <Link to="/about">About</Link>
          </li>
          <li className={path==="/shop" || path.includes("/product/") ?"active":""}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={path==="/cart" ?"active cart-container":"cart-container"}> 
            <Link to="/cart"><FaShoppingBag /></Link>
            <span className='cart-value'>{cart.amount}</span>
          </li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar