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
          setOrders(response.data.data[0]);
         

          console.log(response.data.data[0]);
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
              <th>UFID order</th>
              <th>Item Name</th>
              <th>Quantity</th>
              
            </tr>
          </thead>
          <tbody>
          {orders.Order.map((order, index) => (
    <tr key={index}>
      <td>{orders.UFid}</td>
      <td>{order[0]}</td> {/* Assuming item name is at index 0 */}
      <td>{order[1]}</td> {/* Assuming quantity is at index 1 */}
    </tr>
  ))}
         
            
                
          </tbody>
        </table>
      
    </div>
  );
}

export default Orders;