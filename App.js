import React from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import ProductView from './components/pages/ProductView';
import UserProfilePage from './src/components/pages/UserProfilePage';
import EmployeeLogin from './components/pages/EmployeeLogin';
import Employee from './components/pages/Employee';
import Cart from './components/pages/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}/>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user-profile' element={<UserProfilePage />} />
          <Route path='/product-view' element={<ProductView />} />
          <Route path='/cart' element={<Cart />} />
       
        </Routes>
      </Router>
    </> 
  );
}

export default App;
