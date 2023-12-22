import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Filters() {
  return (
    <section className='filter'>
      {/* <button className='close'><FaTimes/></button> */}
      <form>
        <input type="text" name="searchbar" id="search" placeholder='Search'/>
        <fieldset>
          <h3>Category</h3>
          <input type='radio' name='category' id="All"/><label htmlFor='All'>All</label>
          <input type='radio' name='category' id="man-cloths"/><label htmlFor='man-cloths'>Man cloths</label>
          <input type='radio' name='category' id="woman-cloths"/><label htmlFor='woman-cloths'>Woman cloths</label>
        </fieldset>
        <fieldset>
          <h3>Price</h3>
          <label>$55</label>
          <input type='range' name='price' id="price"/>
        </fieldset>
        <fieldset>
          <h3>Rating</h3>
          <label>3 stars</label>
          <input type='range' name='stars' id="stars" min="0" max="5"/>
        </fieldset>
        <fieldset>
          <button className='btn'>Clear Filters</button>
        </fieldset>
      </form>
    </section>
  )
}

export default Filters