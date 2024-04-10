import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import StudentView from './components/pages/StudentView';
import EmployeeView from './components/pages/EmployeeView';
import Cart from './components/pages/Cart';
import { useSelector } from "react-redux";



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
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUFID={setUFID}    />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/student' element={<StudentView />} />
          <Route path='/employee' element={<EmployeeView />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
