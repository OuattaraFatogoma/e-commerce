import React from 'react'
import { Link } from 'react-router-dom';
import { FaTimes, FaShoppingBag } from 'react-icons/fa';
import logo from '../images/logo.png'

function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <Link to="/"><img src={logo} alt='cara logo'/></Link>
        <button className='toggle-sidebar'><FaTimes style={{color:"darkred"}}/></button>
      </div>
      <ul className='sidebar-links'>
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
    </aside>
  )
}

export default Sidebar