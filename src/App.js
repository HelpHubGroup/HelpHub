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
import Employee from './components/pages/Employee';
import EmployeeLogin from './components/pages/EmployeeLogin';
import UserView from './components/pages/UserView';
import { useEffect, useState } from 'react'
import UpdateInfo from './components/pages/UpdateInfo';
import DeleteInfo from './components/pages/DeleteInfo';
import Orders from './components/pages/Orders';


function App() {
  // initialize the variables for user login
  // and email globally
  const [loggedIn, setLoggedIn] = useState(false)
  const [results, setResults] = useState([]);

  const changeLoginStatus = (status) => {
    setLoggedIn(status);
  }



 
  return (
    <>
      <Router>
        <Navbar loggedIn = {loggedIn}/>
        <Routes>
        <Route path='/' exact element={ <Home />}/>
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login changeLoginStatus ={changeLoginStatus} />}/>
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/update-info' element={<UpdateInfo/>} />
          <Route path='/delete-info' element={<DeleteInfo/>} />
          <Route path='/product-view' element = {<ProductView results={results}/>}/>
          <Route path='/user-profile' element={<UserProfilePage />} />
          <Route path='/employee-login' element={<EmployeeLogin />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/user-view' element={<UserView />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
