import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingBag } from "react-icons/fa";
import logo from "../images/logo.png";



function Navbar() {
  return (
    <nav className='navbar'>
       <div className='nav-center'>
        <div className='nav-header'>
          <Link to="/"><img src={logo} alt='cara logo'/></Link>
          <button className='toggle-sidebar'><FaBars /></button>
        </div>

        <ul className='nav-links'>
          <li className='active'>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li className='cart-container'> 
            <Link to="/cart"><FaShoppingBag /></Link>
            <span className='cart-value'>10</span>
          </li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar