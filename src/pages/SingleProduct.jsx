import {useEffect, useState} from 'react';
import test from '../images/about.jpg'
import {FaStar, FaRegStar, FaMinus, FaPlus} from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom';

function SingleProduct() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  const url = `https://fakestoreapi.com/products/${id}`
  

  async function getProduct(){
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data =  await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  useEffect(()=>{
    getProduct();
  }, [])
  
  if(isLoading) return(<h1>Loading...</h1>);
  const {title, image, price, rating, category, description} = product;
  const rate = Math.round(rating.rate);
  let starsFill = [];
  let starsNotFill = [];
  for(let i = 0; i <rate; i++){
    starsFill.push(<FaStar />);
  }
  for(let i = 0; i <5-rate; i++){
    starsNotFill.push(<FaRegStar />);
  }
  const stars= starsFill.concat(starsNotFill);


  return (
    <section className='single-product'>
      <Link to="/shop"><button className='btn'>BACK TO PRODUCTS</button></Link>
      <div className='product-container'>
        <div className='product-images'>
          <img src={image} alt="" className='main-image' />
          <div className='galerie'>
            <img src={image}  alt="" />
            <img src={test}  alt="" />
            <img src={test}  alt="" />
            <img src={test}  alt="" />
            <img src={test}  alt="" />
          </div>
        </div>
        <div className='product-content'>
          <h2>{title}</h2>
          <div className='rating'>            
            <span>
              {
                stars.map(star => star)
              }
            </span>
            <span>({rating.count} customer reviews)</span>
          </div>
          <h3>${price}</h3>
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
            <p><span className='bold'>Category :</span> {category}</p>
            <p><span className='bold'>Description :</span> {description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct