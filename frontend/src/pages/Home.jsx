


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
    

      {/* Product Section */}
      <div style={{ padding: '3rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>LATEST <span style={{ color: '#1e2b40' }}>COLLECTIONS</span></h2>
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product._id} style={styles.card}>
              <img
                src={`${import.meta.env.VITE_API_URL}/api/products/image/${product._id}`}
                alt={product.name}
                style={styles.cardImg}
              />
              <h3 style={styles.cardTitle}>{product.name}</h3>
              <p style={styles.cardPrice}>₹{product.price}</p>
              <p style={styles.cardDesc}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerTop}>
          <h4>Join the Girls Style Community</h4>
          <h2>Subscribe now & get 20% off</h2>
          <p>Girls Fashion – Where Style Meets Confidence.</p>
          <div style={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email" style={styles.input} />
            <button style={styles.button}>SUBSCRIBE</button>
          </div>
        </div>

        <div style={styles.footerMain}>
          <div>
            <h4 style={styles.footerTitle}>COMPANY</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Delivery</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h4 style={styles.footerTitle}>GET IN TOUCH</h4>
            <p><strong>Phone:</strong>+91 </p>
            <p><strong>Email:</strong> contact@abc.shop</p>
            <br />
            <p><strong>Address:</strong></p>
            <p>Unit-113, Noida</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

const styles = {
  header: {
    padding: '1.5rem 3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    height: '45px',
    marginRight: '10px'
  },
  logoText: {
    fontWeight: '500',
    fontSize: '1.1rem',
    letterSpacing: '2px'
  },
  nav: {
    display: 'flex',
    gap: '2rem'
  },
  navLink: {
    fontWeight: '500',
    textDecoration: 'none',
    color: '#222',
    position: 'relative',
    paddingBottom: '4px'
  },
  icons: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '1.1rem',
    color: '#333'
  },
  icon: {
    cursor: 'pointer'
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
  },
  card: {
    border: '1px solid #eee',
    padding: '1rem',
    borderRadius: '10px',
    transition: 'all 0.3s',
    cursor: 'pointer',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  cardImg: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginTop: '1rem'
  },
  cardPrice: {
    color: '#1e2b40',
    fontWeight: 'bold'
  },
  cardDesc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.6',
    marginTop: '0.5rem'
  },
  footer: {
    marginTop: '5rem',
    background: '#fff',
    color: '#222',
    paddingTop: '4rem',
    borderTop: '1px solid #eee'
  },
  footerTop: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  subscribeForm: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    padding: '12px 16px',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
    width: '60%',
    outline: 'none'
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer'
  },
  footerMain: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    padding: '2rem 4rem',
    flexWrap: 'wrap'
  },
  footerTitle: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  footerText: {
    maxWidth: 400,
    color: '#666',
    fontSize: '14px',
    lineHeight: '1.6'
  },
  footerBottom: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
    padding: '2rem 1rem'
  }
};
