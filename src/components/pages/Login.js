import React, {useState} from 'react';
import '../../App.css';
import Button from '../Button';

  function Login() {

    const[UFID, setUFID] = useState('')
    const [password, setPassword] = useState('')
    const [UFIDerror, setUFIDerror] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const onButtonClick = () => {

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