import {useEffect, useState, useRef} from 'react';
import test from '../images/about.jpg'
import {FaMinus, FaPlus} from 'react-icons/fa';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../utils/context';
import ErrorPage from './ErrorPage';
import { Rating } from '../components';

function SingleProduct() {
  const navigate = useNavigate();
  const {addToCart} = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [amount, setAmount] = useState(1);
  const [product, setProduct] = useState([]);
  const mainImage = useRef(null);
  const {id} = useParams();
  //const url = `https://fakestoreapi.com/products/${id}`;
  const url = `http://localhost:5000/api/v1/products/${id}`;

  

  function handleAdd(){
    product.amount = amount;
    addToCart(product);
    navigate("/cart");
  }
  function ChangeMainImage(e){
    const image = e.target;
    const imageurl = image.src;
    mainImage.current.src = imageurl;
    image.style.border = "2px solid black";
    setTimeout(() =>{
      image.style.border = "none";
    }, 1000)
  }

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
  
  if(product.length<=0) return(<ErrorPage/>);
  console.log(product);
  const {title, image, price, rating, category, description} = product;
  console.log(rating);
  
  return (
    <section className='single-product'>
      <Link to="/shop"><button className='btn'>BACK TO PRODUCTS</button></Link>
      <div className='product-container'>
        <div className='product-images'>
          <img src={image} alt="" className='main-image' ref={mainImage}/>
          <div className='galerie'>
            <img src={image}  alt="test" onClick={ChangeMainImage}/>
            <img src={test}  alt="test" onClick={ChangeMainImage}/>
            <img src={test}  alt="test" onClick={ChangeMainImage}/>
            <img src={test}  alt="test" onClick={ChangeMainImage}/>
            <img src={test}  alt="test" onClick={ChangeMainImage}/>
          </div>
        </div>
        <div className='product-content'>
          <h2>{title}</h2>
          <Rating rating={rating}/>
          <h3>${price}</h3>
          <div className='actions'>
            <div>            
              <button onClick={()=>setAmount(amount-1)}><FaMinus/></button>
              <p>{amount<1 ? 1 : amount  }</p>
              <button onClick={()=>setAmount(amount+1)}><FaPlus/></button>
            </div>
              <button className='btn' onClick={handleAdd}>ADD TO CART</button>
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