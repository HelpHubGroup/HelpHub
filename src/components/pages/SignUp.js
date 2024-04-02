import React, {useState} from 'react';
import '../../App.css';

function SignUp() {
  
    const[UFID, setUFID] = useState('')
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [UFIDerror, setUFIDerror] = useState('')
    const [passwordError, setPasswordError] = useState('')
   
  
  
    const onButtonClick = () => {
      
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
        <label className="errorLabel">{UFIDerror}</label>
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