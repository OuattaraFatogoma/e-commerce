import React from 'react'
import test from '../images/hero4.png'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStar } from "react-icons/fa";

function ProductCard() {
  return (
    <div className='product-card'>
      <div className='head'>
        <img src={test} alt="test" />
      </div>
      <div className='footer'>
        <Link to="/product/1"><h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3></Link>
        <div className='rating'>
          <span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            {/* <FaStar /> */}
            <FaRegStar />
          </span>
          <span>(55)</span>
        </div>
        <p className='price'>$99</p>
      </div>
    </div>
  )
}

export default ProductCard