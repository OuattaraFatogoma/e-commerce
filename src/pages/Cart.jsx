import React from 'react'
import { GoTrash } from "react-icons/go";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../utils/context';

function Cart() {
  const {cart, changeAmount, deleteFromCart, clearCart} = useGlobalContext();
  const {items, subTotal, total, shipFees} = cart;

  // console.log(subTotal, total, shipFees);
  if(items.length<=0)return(
    <section className="cart">
      <div className='title' style={{height:"67vh"}}>
        <h2>Cart Empty</h2>
        <Link to="/shop"><button className='btn'>Fill Cart</button></Link>
      </div>
    </section>
  )
  return (
    <section className="cart">
      <div>
        <table className='cart-resume'>
            <thead>
                <tr>
                    <th className='item'>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th className='remove'></th>
                </tr>
            </thead>
            <tbody>
              {
                items.map(product =>{
                  const {id, title, price, amount, image} = product;
                  const subtotal = price*amount;
                  return(
                    <tr key={id}>
                        <td className='item'>
                          <div>                        
                            <img src={image} alt={title} />
                            <p>{title}</p>
                          </div>
                        </td>
                        <td className='price'>${price}</td>
                        <td className='quantity'>
                          <div>
                            <button onClick={()=>changeAmount(id, "dec")}><FaMinus/></button>
                            <p>{amount}</p>
                            <button onClick={()=>changeAmount(id, "inc")}><FaPlus/></button>
                          </div>
                        </td>
                        <td className='subtotal'>${parseFloat(subtotal.toFixed(2))} </td>
                        <td className='remove' onClick={()=> deleteFromCart(id)}><GoTrash /></td>
                    </tr>
                  )
                })
              }
            </tbody>
            <div />
        </table>
      </div>
        <div className='action'>
          <Link to="/shop"><button className='btn'>Continue Shopping</button></Link>
          <button className='btn clear-cart' onClick={clearCart}>Clear Shopping Cart</button>
        </div>

        <div className='total'>
          <table>
            <tbody>
              <tr>
                <td>Subtotal :</td>
                <td>${subTotal}</td>
              </tr>
              <tr>
                <td>Shipping Fee :</td>
                <td>${shipFees}</td>
              </tr>
            </tbody>
            <th>Order Total</th>
            <th>${total}</th>
          </table>
          <button className='btn login-btn'>Login</button>
        </div>
    </section>
  )
}

export default Cart