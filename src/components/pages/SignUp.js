import React, {useState} from 'react';
import '../../App.css';
import Button from '../Button';
import axios from 'axios';

function SignUp() {

    const[UFID, setUFID] = useState('')
    const[First_Name, setFirstName] = useState('')
    const[Last_Name, setLastName] = useState('')
    const [Points, setPoints] = useState(15)
    const [Phone_Number, setPhoneNumber] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [UFIDerror, setUFIDerror] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [signUpStatus, setSignUpStatus] = useState('');
    const Cart = [];



    const onButtonClick = async () => {
      if (!UFID || !First_Name || !Last_Name || !Password || !confirmPass || !Phone_Number) {
          setUFIDerror('All fields are required');
          setLastNameError('All fields are required');
          setPasswordError('All fields are required');
          setPhoneError('All field are required');
          return;
      }
  
      if (Password !== confirmPass) {
          setPasswordError('Passwords do not match');
          return;
      }
     
      if(Phone_Number.length != 10){
        setPhoneError('Phone number not valid');
        return;
      }
      setUFIDerror('');
      setLastNameError('');
      setPasswordError('');
      setPhoneError('');
  
      // If all fields are filled and passwords match, proceed to make API call
      try {
          const response = await axios.post('http://localhost:5001/api/postuser', {
              UFID,
              First_Name,
              Last_Name,
              Password,
              Points,
              Phone_Number,
              Cart

          });
          if (response.status === 201) {
              // If the request is successful, reset the form
              setUFID('');
              setFirstName('');
              setLastName('');
              setPassword('');
              setPhoneNumber('');
              setConfirmPass('');
              setUFIDerror('');
              setLastNameError('');
              setPasswordError('');
              setPhoneError('');
              setSignUpStatus('User signed up successfully');
          } else {
            console.log('Error signing up:', response.statusText);
            setSignUpStatus('Error signing up.');
          }
      } catch (error) {
        if(error.response.status == 400){
          setSignUpStatus('User with the same UFID already exists');
        } else{
          console.log('Error signing up:', error);
          setSignUpStatus('Error signing up');
        }
        
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
          value={First_Name}
          placeholder="Enter your first name"
          onChange={(ev) => setFirstName(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{UFIDerror}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={Last_Name}
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
          value={Phone_Number}
          placeholder="Enter your Phone Number"
          onChange={(ev) => setPhoneNumber(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{phoneError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={Password}
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
        <input className={'login'} type="button" onClick={onButtonClick} value={'Sign up'} />
      </div>
      <div>
        {signUpStatus && <div className="popup">{signUpStatus}</div>}
      </div>
    </div>

  )
}
  export default SignUp;
