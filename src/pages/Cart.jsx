import React from 'react'
import { GoTrash } from "react-icons/go";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import test from '../images/about.jpg';


function Cart() {
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
                <tr>
                    <td className='item'>
                      <div>                        
                        <img src={test} alt="test" />
                        <p>Name</p>
                      </div>
                    </td>
                    <td className='price'>$33</td>
                    <td className='quantity'>
                      <div>
                        <button><FaMinus/></button>
                        <p>1</p>
                        <button><FaPlus/></button>
                      </div>
                    </td>
                    <td className='subtotal'>$66 </td>
                    <td className='remove'><GoTrash /></td>
                </tr>
                <tr>
                    <td className='item'>
                      <div>                        
                        <img src={test} alt="test" />
                        <p>Blal qscbi xkhjqsuoc</p>
                      </div>
                    </td>
                    <td className='price'>$33</td>
                    <td className='quantity'>
                      <div>
                        <button><FaMinus/></button>
                        <p>1</p>
                        <button><FaPlus/></button>
                      </div>
                    </td>
                    <td className='subtotal'>$66 </td>
                    <td className='remove'><GoTrash /></td>
                </tr>
            </tbody>
            <div />
        </table>
      </div>
        <div className='action'>
          <Link to="/shop"><button className='btn'>Continue Shopping</button></Link>
          <button className='btn clear-cart'>Clear Shopping Cart</button>
        </div>

        <div className='total'>
          <table>
            <tbody>
              <tr>
                <td>Subtotal :</td>
                <td>$999</td>
              </tr>
              <tr>
                <td>Shipping Fee :</td>
                <td>$00</td>
              </tr>
            </tbody>
            <th>Order Total</th>
            <th>$999</th>
          </table>
          <button className='btn login-btn'>Login</button>
        </div>
    </section>
  )
}

export default Cart