import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import ProductView from './components/pages/ProductView';
import UserProfilePage from './components/pages/UserProfilePage';
import { useEffect, useState } from 'react'

function App() {
  // initialize the variables for user login
  // and email globally
  const [loggedIn, setLoggedIn] = useState(false)
  const [UFID, setUFID] = useState('')

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}/>
          <Route path='/services' element={<Services />} /> 
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setEmail={setUFID}/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/product-view' element = {<ProductView/>}/>
          <Route path='/user-profile' element={<UserProfilePage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
