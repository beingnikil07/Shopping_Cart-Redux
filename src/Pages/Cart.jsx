import React from 'react';
import { useSelector, useDispatch } from 'react-redux';  //to use the store data
import { remove } from '../store/cartSlice';
const Cart = () => {
  //avv remove karenge to ek action ko dispatch bhi to karna padega 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);  //Subscribe cart state 
  //receiving product id
  const handleRemove = (productId) => {
    //dispatch mai humko ek action dena hota hai with payload 
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWapper'>
        {
          products.map((product) => (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button
                onClick={() => handleRemove(product.id)} //id ke through hum particular product ko remove karenge 
                className="btn">
                Remove
              </button>
            </div>

          ))}

      </div>
    </div>
  )
}

export default Cart;
