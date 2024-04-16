import React, {useState} from 'react';
import '../../App.css';
import Button from '../Button';
import axios from 'axios';

function SignUp() {

    const[UFID, setUFID] = useState('')
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [UFIDerror, setUFIDerror] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')



    const onButtonClick = async () => {
      if (!UFID || !firstName || !lastName || !password || !confirmPass) {
          setUFIDerror('All fields are required');
          setLastNameError('All fields are required');
          setPasswordError('All fields are required');
          return;
      }
  
      if (password !== confirmPass) {
          setPasswordError('Passwords do not match');
          return;
      }
  
      // If all fields are filled and passwords match, proceed to make API call
      try {
          const response = await axios.post('http://localhost:5001/api/postuser', {
              UFID,
              firstName,
              lastName,
              password,
          });
          if (response.status === 201) {
              // If the request is successful, reset the form
              setUFID('');
              setFirstName('');
              setLastName('');
              setPassword('');
              setConfirmPass('');
              setUFIDerror('');
              setLastNameError('');
              setPasswordError('');
              console.log('User signed up successfully');
          } else {
              console.error('Error signing up:', response.statusText);
          }
      } catch (error) {
          console.error('Error signing up:', error);
      }
    }
  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Sign Up</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={firstName}
          placeholder="Enter your first name"
          onChange={(ev) => setFirstName(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{UFIDerror}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={lastName}
          placeholder="Enter your last name"
          onChange={(ev) => setLastName(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{lastNameError  }</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={UFID}
          placeholder="Enter your UFID"
          onChange={(ev) => setUFID(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{UFIDerror}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
        <br />
      </div>
      <div className={'inputContainer'}>
        <input
          value={confirmPass}
          placeholder="Confirm your password"
          onChange={(ev) => setConfirmPass(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Sign up'} />
      </div>
    </div>

  )
}
  export default SignUp;
