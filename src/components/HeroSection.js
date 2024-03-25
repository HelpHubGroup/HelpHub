import React, {useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import axios from 'axios';

function HeroSection() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5001/api/items');
        console.log('Response:', response.data); // Log the response data to the console
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className = 'hero-container'>
     <div className='input-areas'>
          <form>
            <input
              className='hero-input'
              placeholder='SEARCH'
            />
          <i class='hero-search-icon' />
          </form>
        </div>
    </div>
  );
}

export default HeroSection;
