import React from 'react';
import './Cards2.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mission and Values</h1>
      <div className='cards__container'>
        <p className='full_statement'>To foster a globally sustainable campus community by ensuring UF campus members have convenient access to nutritious food options, thereby promoting both local well-being and broader environmental responsibility.</p>
        <img src="../images/img_globalcharity.jpg" alt="Global Charity" className='full_image'/>
      </div>
    </div>
  );
}

export default Cards;
