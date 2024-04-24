import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  //Links to external sites
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
              src = "../images/img_farm.jpg"
              path = "https://fieldandfork.ufl.edu/programs/farm-and-gardens/"
              text='The Origins of Some Items'
              label='Organizations'
            />
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Cards;
