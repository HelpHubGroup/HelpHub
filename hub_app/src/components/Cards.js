import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Less Waiting, More Eating</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src = "../images/charity_pic.png"
              text='FIELD & FORK PANTRY'
              label = 'Organizations'
              path='https://pantry.fieldandfork.ufl.edu/about/'
            />
            <CardItem
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Cards;
