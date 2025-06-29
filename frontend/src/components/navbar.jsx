import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>🛍 Girls Cloth</h2>
      <div style={styles.menu}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/createproduct" style={styles.link}>Add Product</Link>
       
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  menu: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default Navbar;