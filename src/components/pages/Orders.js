import React, { useState, useEffect } from 'react';
import './UserView.css';
import axios from 'axios';

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orderlist, setOrderlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5001/api/getallorders');
      setOrderlist(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <p className='loading-text'>Loading...</p>;
  }

  if (error) {
    return <p className='loading-text'>Error obtaining the orders</p>;
  }

  return (
    <div className='user-view-container'>
      <div className='filter-text'>Orders</div>
      {loading ? (
        <p>Loading...</p>
      ) : orderlist.length === 0 ? (
        <p>No items in cart</p>
      ) : (
      <table className='items-table'>
        <thead>
          <tr>
            <th>UFID order</th>
            <th>Item Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orderlist.data[0].Order.map((order, index) => (
            <tr key={index}>
              <td>{orderlist.data[0].UFid}</td> 
              <td>{order[0]}</td>
              <td>{order[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    </div>
  );
}

export default Orders;
