import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Pizza', price: '$10' },
        { id: 2, name: 'Burger', price: '$8' },
        { id: 3, name: 'Salad', price: '$6' },
        { id: 4, name: 'Pasta', price: '$12' },
      ];
    
      return (
        <div className="food-menu">
          <h2>Menu</h2>
          <ul className="menu-list">
            {menuItems.map(item => (
              <li key={item.id} className="menu-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    


    
}

export default Menu;