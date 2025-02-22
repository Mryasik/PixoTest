import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = ({ products, addToCart }) => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;
