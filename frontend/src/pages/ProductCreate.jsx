import React, { useState } from 'react';
import './ProductCreate.css'; // Optional: Add if you want styles

export default function UploadProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('image', formData.image);

    try {
      const res = await fetch('http://localhost:5000/api/products/upload', {
        method: 'POST',
        body: data
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || 'Upload failed');

      setMessage('✅ Product uploaded successfully!');
      setFormData({ name: '', price: '', description: '', image: null });
    } catch (error) {
      setIsError(true);
      setMessage('❌ ' + (error.message || 'Something went wrong'));
    }
  };

  return (
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2>Upload Product</h2>

        {message && (
          <div className={`form-message ${isError ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

        <label>Product Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          placeholder="Enter product name"
          onChange={handleChange}
          required
        />

        <label>Price</label>
        <input
          name="price"
          type="number"
          value={formData.price}
          placeholder="Enter price"
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          placeholder="Enter description"
          rows="4"
          onChange={handleChange}
        />

        <label>Image File</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          accept="image/*"
          required
        />

        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
}
