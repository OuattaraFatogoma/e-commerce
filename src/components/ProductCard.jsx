import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStar } from "react-icons/fa";

function ProductCard({id, title, image, price, rating}) {
  const rate = Math.round(rating.rate);
  let starsFill = [];
  let starsNotFill = [];
  for(let i = 0; i <rate; i++){
    starsFill.push(<FaStar key={i}/>);
  }
  for(let i = rate; i <5; i++){
    starsNotFill.push(<FaRegStar key={i}/>);
  }
  const stars= starsFill.concat(starsNotFill);
  
  
  return (
    <div className='product-card'>
      <div className='head'>
        <img src={image} alt={title} />
      </div>
      <div className='footer'>
        <Link to={`/product/${id}`}><h3>{title}</h3></Link>
        <div className='rating'>
          <span>
            {
              stars.map(star => star)
            }
          </span>
          <span>({rating.count})</span>
        </div>
        <p className='price'>${price}</p>
      </div>
    </div>
  )
}

export default ProductCard