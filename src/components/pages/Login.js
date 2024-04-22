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
      // if UFID input box is empty
      if(UFID.trim() == '' && password.trim() == ''){
        setUFIDerror('Please enter your UFID');
        setPasswordError('Please enter your password');
        return;
      } else if(password.trim() == ''){
        setPasswordError('Please enter your password');
        setUFIDerror('');
        return;
      }
        else if(UFID.trim() == ''){
          setUFIDerror('Please enter your UFID');
          setPasswordError('');
          return;
        }
      else{
        setUFIDerror('');
        setPasswordError('');
      }


      try {
        const response = await axios.get(`http://localhost:5001/api/getuser?query=${(UFID)}`);
        const user = response.data[0];
        console.log(response.data[0]);
        if (response.status === 200) {
          if (user.Password == password){
            localStorage.clear()
            localStorage.setItem('UFID', UFID);
            setLoginStatus('Login successful!');
            setIsLoggedIn(true);
            
            console.log(localStorage.getItem(Object.keys(localStorage)[0]));
          } else {
            setLoginStatus('Invalid password. Please try again.');
            setIsLoggedIn(false);
          }


        } else{
          setIsLoggedIn(false);
          setLoginStatus('UFID not found. Please try again.');

        }
        



      } catch (error) {
        setIsLoggedIn(false);
        console.error('Error logging in:', error);
        setLoginStatus('User does not exist. Please try again.');
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