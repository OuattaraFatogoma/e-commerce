import React from 'react'

function Newsletter() {
  return (
    <section className='newsletter'>
      <div>
        <h2>Sign Up For Newletters</h2>
        <p>Get e-mail updates about our latest shop and <span>special Offers</span></p>
      </div>
      <form>
        <input type="text" placeholder='Your email address' />
        <button type='submit' className='btn'>Sign Up</button>
      </form>
    </section>
  )
}

export default Newsletter