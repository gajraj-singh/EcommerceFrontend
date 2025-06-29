import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Navbar from './components/navbar';
import Register from './pages/Register';
import CreateProduct from './pages/ProductCreate';




const App = () => {
  return (
    <Router>
      {/* ✅ Navbar is shown on every route */}
      <Navbar />

      {/* All routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/createproduct" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
