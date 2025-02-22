import React, { useState } from 'react';
import useFetchProducts from './hooks/useFetchProducts';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import './App.scss';

function App() {
  const { products, loading } = useFetchProducts();
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productsPerPage = 6;

  const addToCart = (product) => setCart([...cart, { ...product, cartId: Date.now() }]);

  const removeFromCart = (cartIdToRemove) => {
    setCart(cart.filter(item => item.cartId !== cartIdToRemove));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="app">
      <Header cartCount={cart.length} toggleCart={toggleCart} />
      <Filter categories={categories} onSelect={setCategory} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <ProductList products={currentProducts} addToCart={addToCart} />
      )}
      <div className="pagination">
        {currentPage > 1 && (
          <button className="nav-btn" onClick={() => setCurrentPage(currentPage - 1)}>
            ◀ Prev
          </button>
        )}
        {indexOfLastProduct < filteredProducts.length && (
          <button className="nav-btn" onClick={() => setCurrentPage(currentPage + 1)}>
            Next ▶
          </button>
        )}
      </div>
      {isCartOpen && <Cart cart={cart} removeFromCart={removeFromCart} toggleCart={toggleCart} />}
    </div>
  );
}

export default App;