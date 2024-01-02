import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

function ProductCard({id, title, image, price, rating}) {
  
  return (
    <div className='product-card'>
      <div className='head'>
        <img src={image} alt={title} />
      </div>
      <div className='footer'>
        <Link to={`/product/${id}`}><h3>{title}</h3></Link>
        <Rating rating={rating}/>
        <p className='price'>${price}</p>
      </div>
    </div>
  )
}

export default ProductCard