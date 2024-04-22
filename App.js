import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import ProductView from './components/pages/ProductView';
import UserProfilePage from './src/components/pages/UserProfilePage';
import EmployeeLogin from './components/pages/EmployeeLogin';
import Employee from './components/pages/Employee';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}/>
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
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
