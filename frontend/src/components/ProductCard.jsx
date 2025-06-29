
import React from 'react';
const ProductCard = ({ product }) => (
  <div style={styles.card}>
    <img src={product.image} alt={product.name} style={styles.image} />
    <h3 style={styles.name}>{product.name}</h3>
    <p style={styles.price}>Rs. {product.price}</p>
    <button style={styles.button}>Add to Cart</button>
  </div>
);

const styles = {
  card: {
    border: '1px solid #e5e7eb',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 6,
    marginBottom: '1rem',
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: '600',
  },
  price: {
    color: '#111827',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#3b82f6',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default ProductCard;