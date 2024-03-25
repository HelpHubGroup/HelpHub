import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className = 'hero-container'>
     <div className='input-areas'>
          <form>
            <input
              className='hero-input'
              placeholder='SEARCH'
            />
            <Button buttonStyle = "btn--outline2">
            <i className="fas fa-search" />
            </Button>
        </form>
        </div>
    </div>
  );
}

export default HeroSection;
