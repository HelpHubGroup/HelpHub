import React, {useState} from 'react';
import '../../App.css';
import Button from '../Button';
import axios from 'axios';

  function Login() {

    const[UFID, setUFID] = useState('');
    const [password, setPassword] = useState('');
    const[Data, setData] = useState('');
    const [UFIDerror, setUFIDerror] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const onButtonClick = async(event) => {
      event.preventDefault();
      try {   
        const response = await axios.get(`http://localhost:5001/api/getuser?query=${UFID}`);
        console.log(response.data);
        setData(response.data);
        if(Data[0].Password === password){
            //need to make it so it goes into the login page
            window.open('Services.js','_blank');
        }
        else{
          alert('Login failed. Please check your UFID and password.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } 
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
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>



  )
}

export default Login;