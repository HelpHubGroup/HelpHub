import React, {useState} from 'react';
import '../../App.css';
import { Button } from '../Button';

import axios from 'axios';
import { Navigate } from 'react-router-dom';

  function EmployeeLogin({onLogin,setIsLoggedIn}) {

    const[employeeID, setEmployeeID] = useState('')
    const [password, setPassword] = useState('')
    const [IDerror, setIDerror] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginStatus, setLoginStatus] = useState('');
    const [isLoggedStatus, setIsLoggedStatus] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();


      // if ID input box is empty
      if(employeeID.trim() == '' && password.trim() == ''){
        setIDerror('Please enter your ID');
        setPasswordError('Please enter your password');
        return;
      } else if(password.trim() == ''){
        setPasswordError('Please enter your password');
        setIDerror('');
        return;
      }
        else if(employeeID.trim() == ''){
          setIDerror('Please enter your ID');
          setPasswordError('');
          return;
        }
      else{
        setIDerror('');
        setPasswordError('');
      }

      try {
        const response = await axios.get(`http://localhost:5001/api/getEmployee?query=${(employeeID)}`);
        const user = response.data[0];
        if (!user || user.password !== password){
          localStorage.clear()
          localStorage.setItem('employeeID', employeeID);
          setLoginStatus('Login successful!');
          setIsLoggedIn(true);
          setIsLoggedStatus(true);
          onLogin({employeeID});
          console.log(localStorage.getItem(Object.keys(localStorage)[0]));
        } else {
          setLoginStatus('Invalid credentials. Please try again.');
        console.log(response.data[0]);
        if (response.status === 200) {
          if (user.Password == password){
            localStorage.clear()
            localStorage.setItem('ID', employeeID);
            setLoginStatus('Login successful!');
            setIsLoggedIn(true);
            
            console.log(localStorage.getItem(Object.keys(localStorage)[0]));
          } else {
            setLoginStatus('Invalid password. Please try again.');
            setIsLoggedIn(false);
          }


        } else{
          setIsLoggedIn(false);
          setLoginStatus('ID not found. Please try again.');

        }
        



      }
      } catch (error) {
        setIsLoggedIn(false);
        console.error('Error logging in:', error);
        setLoginStatus('User does not exist. Please try again.');
      }
    }

    if(isLoggedStatus){
      setIsLoggedIn(true);
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