import React from 'react'
import ProductCard from './ProductCard';

function Products() {
  return (
    <section className='products'>
      <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
      </div>

      <div className='products-container'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  )
}

export default Products