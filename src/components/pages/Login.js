import React, {useState} from 'react';
import '../../App.css';
import Button from '../Button';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

  function Login({changeLoginStatus}) {

    const[UFID, setUFID] = useState('')
    const [password, setPassword] = useState('')
    const [UFIDerror, setUFIDerror] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginStatus, setLoginStatus] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [employee, setEmployee] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(`http://localhost:5001/api/getuser?query=${(UFID)}`);
        const user = response.data[0];
        if (!user || user.password !== password){
          localStorage.clear()
          localStorage.setItem('UFID', UFID);
          setLoginStatus('Login successful!');
          changeLoginStatus(true);
          setIsLoggedIn(true);
          console.log(localStorage.getItem(Object.keys(localStorage)[0]));
          
        } else {
          setIsLoggedIn(false);
          changeLoginStatus(false);
          setLoginStatus('Invalid credentials. Please try again.');
        }
        
       
         
      } catch (error) {
        setIsLoggedIn(false);
        changeLoginStatus(true);
        console.error('Error logging in:', error);
        setLoginStatus('An error occurred. Please try again later.');
      }
    };

    const handleEmployee = async (e) => {
      setEmployee(true);
       
    };

    if(isLoggedIn){
      return <Navigate to='/user-profile'  />
    } 
    if(employee){
      return <Navigate to='/employee-login'  />
    } 
  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={UFID}
          placeholder="Enter your UFID here"
          onChange={(ev) => setUFID(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{UFIDerror}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'login'} type="button" onClick={handleLogin} value={'Log in'} />
        <br />
        <input className={'employee'} type="button" onClick={handleEmployee} value={'Click here if you are an Employee'} />
        
      </div>
      <div>
        {loginStatus && <div className="popup">{loginStatus}</div>}
      </div>
    </div>



  )
}

export default Login;