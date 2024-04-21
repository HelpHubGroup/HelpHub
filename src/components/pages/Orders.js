import React, { useState, useEffect} from 'react';
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

  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => { 
    const fetchItems = async () => {
        setLoading(true);
        try {
          const response = await axios.get('http://localhost:5001/api/getallorders');
          setOrders(response.data.orders);
          console.log(orders);
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
            console.log(err);
        }
      };
    

    fetchItems();

  }, []);

  if (loading) {
    return <p className='loading-text'>Loading...</p>;
  }


  return (
    <div className='user-view-container'>
      <div className='filter-text'>
        Orders
      </div>
     
      
        <table className='items-table'>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Item Name</th>
              <th>Quantity</th>
              
            </tr>
          </thead>
          <tbody>
                {orders.map(order => (
                <li key={order._id}>{order.name} - {order.quantity}</li>
                ))}
            
          </tbody>
        </table>
      
    </div>
  );
}

export default Orders;