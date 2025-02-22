import React from 'react';
import './Filter.scss';

const Filter = ({ categories, onSelect }) => (
  <div className="filter">
    <select onChange={e => onSelect(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>{cat}</option>
      ))}
    </select>
    <button onClick={() => onSelect('')}>Reset Filter</button>
  </div>
);

export default Filter;