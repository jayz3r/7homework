import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotal } from "../store/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTotal())
  }, [cart, dispatch])
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your card is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {/* <div className="titles">
            <h3 className="product-title">Product </h3>
            <h3 className="price">Product </h3>
            <h3 className="quantity">Product </h3>
            <h3 className="total">Product </h3>
          </div> */}
          <div className="cart-items">
            {cart.cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.thumbnail} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.description}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <div className="count">Quantity: {cartItem.cartQuantity}</div>
                </div>
                <div className="card-product-total-price">
                  Total ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
              <div className="continue-shopping">
                <Link to="/">
                  <span>Continue shopping</span>
                </Link>
              </div>
            </div>
      )}
    </div>
  );
};

export default Cart;
