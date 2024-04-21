import React, { useState } from 'react';
import './UserView.css';
import HeroSection from '../HeroSection';
import axios from 'axios';

function Orders() {
  const categories = [
    { name: 'Fruit', image: 'img-fruit.png' },
    { name: 'Vegetable', image: 'img-vegetable.png' },
    { name: 'Grains', image: 'img-grain.png' },
    { name: 'Condiment', image: 'img-condiment.png' },
    { name: 'Oil', image: 'img-oil.png' },
    { name: 'Nuts', image: 'img-nuts.png' },
    { name: 'Protein', image: 'img-protein.png' },
    { name: 'Beans', image: 'img-beans.png' }
  ];

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const fetchItems = async (categoryName) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5001/api/get_allfood_Groupitems`, { params: { query: categoryName } });
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch items:', error);
      setLoading(false);
    }
  };

  const handleClick = (categoryName) => {
    fetchItems(categoryName);
  };

  const handleSearch = (searchedItems) => {
    setItems(searchedItems);
  };

  const handleAddToCart = (itemName) => {
    console.log(`Added ${itemName} to cart`);
    // implement the functionality to add items to the cart here
  };

  return (
    <div className='user-view-container'>
      <HeroSection onSearch={handleSearch} />
      <div className='filter-text'>
        Search by item above or filter by category below
      </div>
      <div className='gallery'>
        {categories.map((category, index) => (
          <button key={index} className='category-button' onClick={() => handleClick(category.name)}>
            <img
              src={`images/${category.image}`}
              alt={category.name}
              className='gallery-image'
            />
            <div className='category-name'>{category.name}</div>
          </button>
        ))}
      </div>
      {loading ? <p className='loading-text'>Loading...</p> : items.length > 0 && (
        <table className='items-table'>
          <thead>
            <tr>
              <th>Food Group</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Point Cost</th>
              <th>Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.Food_Group}</td>
                <td>{item.Item_Name}</td>
                <td>{item.Quantity}</td>
                <td>{item.Point_Cost}</td>
                <td><button onClick={() => handleAddToCart(item.Item_Name)}>Add to Cart</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;