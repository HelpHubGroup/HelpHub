import React, { useState, useEffect} from 'react';
import './UserView.css';
import HeroSection from '../HeroSection';
import axios from 'axios';

function Orders() {
 


  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [cantGet, setCantGet] = useState(false);


  useEffect(() => { 
    const fetchItems = async () => {
        setLoading(true);
        try {
          const response = await axios.get('http://localhost:5001/api/getallorders');
          setOrders(response.data);
          console.log(orders);
          setCantGet(false);
          setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
            console.log(err);
            setCantGet(true);
            
        }
      };
    

    fetchItems();

  }, []);

  if (loading) {
    return <p className='loading-text'>Loading...</p>;
  }
  if(cantGet){
    return <p className = 'loading-text'>Error obtaining the orders</p>
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
            
            {(() => {
            const rows = [];
            for (let i = 0; i < orders.length; i++) {
                const order = orders[i];
                rows.push(
                <tr key={i}>
                    <td>{i + 1}</td> {/* Adding 1 to index to display order number */}
                    <td>{order[0]}</td> {/* Assuming first attribute is item name */}
                    <td>{order[1]}</td> {/* Assuming second attribute is quantity */}
                </tr>
          );
        }
        return rows;
      })()}
                
          </tbody>
        </table>
      
    </div>
  );
}

export default Orders;