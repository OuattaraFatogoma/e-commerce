import React from 'react'
import test from '../images/about.jpg';
import {FaStar, FaRegStar, FaMinus, FaPlus} from 'react-icons/fa'

function SingleProduct() {
  return (
    <section className='single-product'>
      <button className='btn'>BACK TO PRODUCTS</button>
      <div className='product-container'>
        <div className='product-images'>
          <img src={test} alt="" className='main-image' />
          <div className='galerie'>
            <img src={test}  alt="" />
            <img src={test}  alt="" />
            <img src={test}  alt="" />
            <img src={test}  alt="" />
            <img src={test}  alt="" />
          </div>
        </div>
        <div className='product-content'>
          <h2>Product Name</h2>
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
          <h3>$33</h3>
          <div className='actions'>
            <div>            
              <button><FaMinus/></button>
              <p>1</p>
              <button><FaPlus/></button>
            </div>
            <button className='btn'>ADD TO CART</button>
          </div>
          <hr />
          <div className='text'>
            <p><span className='bold'>Category :</span> men's clothing</p>
            <p><span className='bold'>Description :</span> Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct