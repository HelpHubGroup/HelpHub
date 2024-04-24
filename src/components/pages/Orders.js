import React, { useState, useEffect } from 'react';
import './UserView.css';
import axios from 'axios';

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/api/getallorders');
        setOrders(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchItems();
  }, []);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  if (loading) {
    return <p className='loading-text'>Loading...</p>;
  }

  if (error) {
    return <p className='loading-text'>Error obtaining the orders</p>;
  }

  return (
    <div className='user-view-container'>
      <div className='filter-text'>Orders</div>
      <table className='items-table'>
        <thead>
          <tr>
            <th>UFID order</th>
            <th>Item Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.UFid}</td> {/* Assuming UFid is a property of each order object */}
              <td>{order.ItemName}</td> {/* Assuming ItemName is a property of each order object */}
              <td>{order.Quantity}</td> {/* Assuming Quantity is a property of each order object */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
