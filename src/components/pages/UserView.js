import React, { useState, useEffect } from 'react';
import './UserView.css';
import HeroSection from '../HeroSection';
import axios from 'axios';

function UserView() {
  const categories = [
    { name: 'Fruit', image: 'img-fruit.png' },
    { name: 'Vegetable', image: 'img-vegetable.png' },
    { name: 'Grains', image: 'img-grain.png' },
    { name: 'Condiment', image: 'img-condiment.png' },
    { name: 'Oil', image: 'img-oil.png' },
    { name: 'Nuts', image: 'img-nuts.png' },
    { name: 'Protein', image: 'img-protein.png' },
    { name: 'Beans', image: 'img-beans.png' }
  ]; // Creates Categiores
  const[UFID, setUFID] = useState('');
  const[Cart, setCart] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    try {   
      const response = await axios.get(`http://localhost:5001/api/getuser?query=${localStorage.getItem(Object.keys(localStorage)[0])}`);
      //Set Data Into certain const Array
      console.log(response.data);
      setUFID(response.data[0].UFID)
      setCart(response.data[0].Cart)
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoading(false);
    } 
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async (categoryName) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5001/api/get_allfood_Groupitems`, { params: { query: categoryName } });
      //Search for item and display items 
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

  const update_Cart = async (cart) => {
    // If all fields are filled and passwords match, proceed to make API call
    try {
      console.log(UFID);
      console.log(Cart);
      const response = await axios.put(`http://localhost:5001/api/update_cart`, {
      UFID: UFID,
      Cart: cart,
      });
      console.log(response.data);
        if (response.status === 201) {
            console.log('Cart Update up successfully');
            
        } else {
            console.error('Error updating:', response.statusText);
        }
    } catch (error) {
        console.error('Error updating user:', error);
    }
  }

  const handleAddToCart = (itemName) => {
    //Adds Items to cart and Update so Person array has item
    let current_Cart = Cart;
    let completed = false
    for (let i = 0; i < current_Cart.length; i++) {
      if(current_Cart[i][0] === itemName){
        current_Cart[i][1] += 1;
        completed = true;
        console.log(`Added ${itemName} to cart`);
      }
    }
    if(completed === false){
      current_Cart.push([itemName, 1]);
    }
    console.log(current_Cart);
    update_Cart(current_Cart);
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
// Display the Array of Items and the quanitity that exist

export default UserView;
