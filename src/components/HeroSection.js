import './HeroSection.css';
import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

function HeroSection({ onSearch }) {
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  // Grabs items from database based off query.
  const handleSearch = async () => {
    setSearching(true);
    try {
      console.log(query);
      const response = await axios.get(`http://localhost:5001/api/get_allrelateditems?query=${query}`);
      console.log("Results: ", response.data);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setSearching(false);
    }
  };
  // HTML code for the main page
  return (
    <div className='hero-container'>
      <div className='input-areas'>
        <input
          className='hero-input'
          placeholder='SEARCH'
          value={query}
          onChange={handleInputChange}
        />
        <button className='hero-search-icon' onClick={handleSearch}>
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;