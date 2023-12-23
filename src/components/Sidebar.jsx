import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaShoppingBag } from 'react-icons/fa';
import logo from '../images/logo.png'
import { useGlobalContext } from '../utils/context';


function Sidebar() {
  const location = useLocation();
  const path = location.pathname;
  const {isSidebarOpen, toggleSidebar, cart} =useGlobalContext();
  return (
    <aside className={ isSidebarOpen ? 'sidebar show' : 'sidebar'}>
      <div className='sidebar-header'>
        <Link to="/"><img src={logo} alt='cara logo'/></Link>
        <button className='toggle-sidebar' onClick={toggleSidebar}><FaTimes style={{color:"darkred"}}/></button>
      </div>
      <ul className='sidebar-links'>
          <li className={path==="/" ?"active":""} onClick={toggleSidebar}>
            <Link to="/">Home</Link>
          </li>
          <li  className={path==="/about" ?"active":""} onClick={toggleSidebar}>
            <Link to="/about" >About</Link>
          </li>
          <li className={path==="/shop" || path.includes("/product/") ?"active":""} onClick={toggleSidebar}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={path==="/cart" ?"active cart-container":"cart-container"} onClick={toggleSidebar}> 
            <Link to="/cart"><FaShoppingBag /></Link>
            <span className='cart-value'>{cart.amount}</span>
          </li>
        </ul>
    </aside>
  )
}

export default Sidebar