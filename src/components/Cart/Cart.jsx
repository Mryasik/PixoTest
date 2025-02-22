import React from 'react';
import './Cart.scss';

const Cart = ({ cart, removeFromCart, toggleCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-modal-overlay" onClick={toggleCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="close-btn" onClick={toggleCart}>✕</button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.cartId} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="item-details">
                    <span className="item-title">{item.title}</span>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                    <button className="remove-btn" onClick={() => removeFromCart(item.cartId)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="total">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
