import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import axios from 'axios';

function HeroSection() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5001/api/items?query=${query}`);
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='hero-container'>
      <div className='input-areas'>
        <form onSubmit={handleSubmit}>
          <input
            className='hero-input'
            placeholder='SEARCH'
            value={query}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
