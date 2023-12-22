import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
      <h5>Trade-in-offer</h5>
      <h2 className="display-3">Super Value deals</h2>
      <h2 className="visual display-3">On all products</h2>
      <p>Save more with coupons & up to 70% off!</p>
      <button className='btn'><Link to="/shop">Shop Now</Link></button>
      </div>
    </section>
  )
}

export default Hero