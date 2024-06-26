import React, {useState} from 'react';
import Button from '../Button';
import './ProductView.css';

function ProductView({results}) {



    const onButtonClick = ({results}) => {
    }
  return (
    <div>
      <h1>INVENTORY</h1>
      <table className='ProductTable'>
        <thead>
          <tr>
            <th className='ProductViewTableTitle'>Product Name</th>
            <th className='ProductViewTableTitle'>Price</th>
            <th className='ProductViewTableTitle'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>$10.00</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>$15.00</td>
            <td>10</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <div>
      {results.map((response) => (
        <div key={response.name}>
          <h3>{response.name}</h3>
          <p>{response.description}</p>
        </div>
      ))}
    </div>
    </div>

  )
}
  export default ProductView;
