import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5001/api/getuser`);
      setCart(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
      setLoading(false);
    }
  };

  const updateCart = async (updatedCart) => {
    try {
      const response = await axios.put(`http://localhost:5001/api/update_cart`, {
        Cart: updatedCart
      });
      console.log(response.data);
      fetchCart(); // Fetch updated cart after successful update
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const handleRemoveFromCart = (itemName) => {
    let currentCart = [...cart[0].Cart]; // Create a shallow copy of the cart to avoid direct state mutation
    let itemFound = false;
    for (let i = 0; i < currentCart.length; i++) {
      if (currentCart[i][0] === itemName) {
        if (currentCart[i][1] > 1) {
          currentCart[i][1] -= 1; // Decrement the quantity if more than one
        } else {
          currentCart.splice(i, 1); // Remove the item entirely if it's the last one
        }
        itemFound = true;
        break;
      }
    }

    if (!itemFound) {
      console.error('Item not found in cart to remove');
    } else {
      updateCart(currentCart);

      console.log(`Removed one ${itemName} from cart`);
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.post(`http://localhost:5001/api/postorder`, { cart });
      console.log('Order added successfully');
      // Redirect to user view page after checkout
      navigate('/user-view');
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <div className='cart-container'>
      <h1 className='cart-header'>Cart</h1>
      {loading ? (
        <p>Loading...</p>
      ) : cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <table className='cart-table'>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {cart[0].Cart.map((item, index) => (
              <tr key={index}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>
          <button onClick={() => handleRemoveFromCart(item[0])}>
          Remove from Cart
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      )}
      <button className='checkout-button' onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
