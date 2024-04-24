import React from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import ProductView from './components/pages/ProductView';
import UserProfilePage from './components/pages/UserProfilePage';
import Employee from './components/pages/Employee';
import EmployeeLogin from './components/pages/EmployeeLogin';
import UserView from './components/pages/UserView';
import { useEffect, useState } from 'react'
import UpdateInfo from './components/pages/UpdateInfo';
import DeleteInfo from './components/pages/DeleteInfo';
import UpdateEmployeeinfo from './components/pages/UpdateEmployeeInfo';
import Orders from './components/pages/Orders';
import Cart from './components/pages/Cart';

function App() {
  // initialize the variables for user login
  // and email globally
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [isEmployee, setisEmployee] = useState(false)

  const [results, setResults] = useState([]);

   return (
    <>
      <Router>
      {loggedIn ? <Navbar2 setIsLoggedIn={setIsLoggedIn} isEmployee={isEmployee} /> : <Navbar/>}
        <Routes>
        <Route path='/' exact element={ <Home />}/>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setisEmployee={setisEmployee} />} /> 
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/update-info' element={<UpdateInfo/>} />
          <Route path='/update-employee-info' element={<UpdateEmployeeinfo/>} />
          <Route path='/delete-info' element={<DeleteInfo/>} />
          <Route path='/product-view' element = {<ProductView results={results}/>}/>
          <Route path='/user-profile' element={<UserProfilePage />} />
          <Route path='/employee-login' element={<EmployeeLogin setIsLoggedIn={setIsLoggedIn} setisEmployee={setisEmployee} />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/user-view' element={<UserView />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
