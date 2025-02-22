import React from 'react';
import './Header.scss';

const Header = ({ cartCount, toggleCart }) => (
  <header className="header">
    <h1>Product Store</h1>
    <div className="cart" onClick={toggleCart}>
      🛒 {cartCount}
    </div>
  </header>
);

export default Header;