import React, {useState} from 'react';
import '../../App.css';
import Button from '../Button';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

  function EmployeeLogin({onLogin}) {

    const[employeeID, setEmployeeID] = useState('')
    const [password, setPassword] = useState('')
    const [IDerror, setIDerror] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginStatus, setLoginStatus] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(`http://localhost:5001/api/getEmployee?query=${(employeeID)}`);
        const user = response.data[0];
        if (!user || user.password !== password){
          localStorage.clear()
          localStorage.setItem('employeeID', employeeID);
          setLoginStatus('Login successful!');
          setIsLoggedIn(true);
          onLogin({employeeID});
          console.log(localStorage.getItem(Object.keys(localStorage)[0]));
        } else {
          setLoginStatus('Invalid credentials. Please try again.');
        }
        
       
         
      } catch (error) {
        console.error('Error logging in:', error);
        setLoginStatus('An error occurred. Please try again later.');
      }
    };


    if(isLoggedIn){
      return <Navigate to='/employee'  />
    } 
   
  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Employee Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={employeeID}
          placeholder="Enter ID here"
          onChange={(ev) => setEmployeeID(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{IDerror}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'login'} type="button" onClick={handleLogin} value={'Log in'} />
        <br />
        
        
      </div>
      <div>
        {loginStatus && <div className="popup">{loginStatus}</div>}
      </div>
    </div>



  )
}

export default EmployeeLogin;