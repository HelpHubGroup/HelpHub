import React, { useState, useEffect } from 'react';
import './UserView.css';
import axios from 'axios';

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orderlist, setOrderlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems(); //Gets items from Order list
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

  if (loading) { //Check if loading is true and display loading screen is true
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
        {orderlist.data.map((order, orderIndex) => (
              <React.Fragment key={orderIndex}>
                {order.Cart.map((item, itemIndex) => (
                  <tr key={`${order.UFid}-${itemIndex}`}>
                    <td>{order.UFid}</td>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    )}
    </div>
  );
}
//Table that display a list of order with UFID associated with it along with quanitity
export default Orders;
