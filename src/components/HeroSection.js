import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import axios from 'axios';


function HeroSection() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (items.length > 0) {
      console.log(items[0].Item_Name);

      

    }
  }, [items]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5001/api/getitems?query=${query}`);
   
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
          <Button type="submit" className='hero-search-icon' destination={'/product-view'}>
            <i className="fas fa-search" />
          </Button>
          
        </form>
      </div>
      <div className ='data-result'>


      </div>
    </div>
  );
}

export default HeroSection;
