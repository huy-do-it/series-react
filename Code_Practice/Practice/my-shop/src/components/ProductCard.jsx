import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-thumb" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <div className="meta">
          <span>⭐ {product.rating}</span>
          <Link to={`/product/${product.id}`} className="view-btn">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;