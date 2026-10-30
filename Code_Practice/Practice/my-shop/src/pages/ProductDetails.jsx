import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../api/client';

const ProductDetails = () => {
  const { id } = useParams(); // Get ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div>Loading details...</div>;
  if (!product) return <div>Product not found!</div>;

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Shop</Link>
      <div className="detail-container">
        <img src={product.thumbnail} alt={product.title} />
        <div className="detail-info">
          <h1>{product.title}</h1>
          <span className="badge">{product.category}</span>
          <p className="description">{product.description}</p>
          <h2>${product.price}</h2>
          <p>Rating: {product.rating} / 5</p>
          <p>Stock: {product.stock} units</p>
          <button className="buy-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;