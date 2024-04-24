import React from 'react';
import './Gallery.css';

function Gallery({ categories, onCategoryClick }) {
  //Develop a gallery view that allow for button of all the categories that exist
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