import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { useGlobalContext } from '../utils/context';
import { Link } from 'react-router-dom';

function Products({simplified}) {
  const {filterProducts , products} = useGlobalContext();

  useEffect(()=>{
    console.log('changed')
  }, [filterProducts]);
  return (
    <section className='products'>
      {
        simplified &&
        <div className='title'>
          <h2>Featured Products</h2>
          <div className='underline'></div>
        </div>
      }
      

      <div className='products-container'>
        {
          simplified ? 
          products.map((product,i) =>
            {
              if(i<4) return <ProductCard key={i} {...product}/>
            })
            :
            filterProducts.map((product,i) =>
              <ProductCard key={i} {...product}/>
            )
        }
      </div>
      {
        simplified &&
        <Link to="/shop"><button className='btn more'>All Products</button></Link>
      }
    </section>
  )
}

export default Products