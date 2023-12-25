import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../utils/context';
import {FaStar, FaRegStar} from 'react-icons/fa'

function Filters() {
  const {filter, products, isLoading} = useGlobalContext();

  const categories = ["All",...new Set(products.map(product => product.category))];
  const maxPrice = Math.round(Math.max(...products.map(product => product.price)));
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(maxPrice);

  

  function clearFilter(){
    setSearchTerm("");
    setCategory('All');
    setPrice(maxPrice);
    const allCategory = document.getElementById("All");
    allCategory.checked= true;
  }
  useEffect(()=>{
    const allCategory = document.getElementById("All");
    allCategory.checked= true;
  },[])

  useEffect(()=>{
    filter(searchTerm, category ,price);
  }, [searchTerm, category, price]);


  return (
    <section className='filter'>
      <form>
        <input type="text" name="searchbar" id="search" placeholder='Search' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <fieldset>
          <h3>Category</h3>
          {
            categories.map((category,i) =>
              <div key={i}>
                <input type='radio' name='category' value={category} id={category} onClick={(e)=> setCategory(e.target.value)}/>
                <label htmlFor={category}>{category}</label>
              </div>
            )
          }
        </fieldset>
        <fieldset>
          <h3>Price</h3>
          <label>${price}</label>
          <input type='range' name='price' id="price" value={price}  max={maxPrice} min="0" onChange={(e)=> setPrice(e.target.value)}/>
        </fieldset>
        <fieldset>
          <button type='button' className='btn' onClick={clearFilter}>Clear Filters</button>
        </fieldset>
      </form>
    </section>
  )
}

export default Filters