import React from 'react';
import './Gallery.css';

function Gallery({ categories, onCategoryClick }) {
  //Html code for the display of various images
  return (
    <div className='gallery-container'>
      {categories.map((category, index) => (
        <div key={index} className='gallery-item' onClick={() => onCategoryClick(category.name)}>
          <img src={`/images/${category.image}`} alt={category.name} className='gallery-image' />
          <div className='category-name'>{category.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
