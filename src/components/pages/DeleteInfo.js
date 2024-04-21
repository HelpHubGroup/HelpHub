import React, { useState, useEffect } from 'react';
import '../../App.css';
import Button from '../Button';
import axios from 'axios';

function DeleteInfo() {

    const[UFID, setUFID] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [UFIDerror, setUFIDerror] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [inputsDisabled, setInputsDisabled] = useState(false);

    const fetchUserData = async () => {
      try {   
        const response = await axios.get(`http://localhost:5001/api/getuser?query=${localStorage.getItem(Object.keys(localStorage)[0])}`);
        console.log(response.data);
        setUserData(response.data);
        setUFID(userData[0].UFID)
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      } 
    };

    useEffect(() => {
      fetchUserData();
    }, []);

    useEffect(() => {
        if (userData.length > 0) {
          setInputsDisabled(true);
        }
      }, [userData]);

    const onButtonClick = async () => {
      if (!password || !confirmPass) {
          setPasswordError('All fields are required');
          return;
      }
  
      if (password !== confirmPass) {
          setPasswordError('Passwords do not match');
          return;
      }
  
      // If all fields are filled and passwords match, proceed to make API call
      try {
        const response = await axios.delete(`http://localhost:5001/api/delete_user?query=${UFID}`, {     
              password,
          });
          if (response.status === 201) {
              // If the request is successful, reset the form
              setUFID('');
              setPassword('');
              setConfirmPass('');
              setUFIDerror('');
              setPasswordError('');
              console.log('User Update up successfully');
              
              
          } else {
              console.error('Error deleting:', response.statusText);
          }
      } catch (error) {
          console.error('Error deleting user:', error);
      }
    }
    return (
      <div className={'mainContainer'}>
          <div className={'titleContainer'}>
              <div>Delete Info</div>
              <div className='update_info_warning'>Warning this will be Permanant</div>
          </div>
          <br />
          <div className={'inputContainer'}>
              {isLoading ? (
                  <div>Loading Data..</div>
              ) : (
                  <div>
                      <input
                          value={password}
                          placeholder="Enter Password"
                          onChange={(ev) => setPassword(ev.target.value)}
                          className={'inputBox'}
                          type="password"
                      />
                      <br />
                      <input
                          value={confirmPass}
                          placeholder="Confirm Password"
                          onChange={(ev) => setConfirmPass(ev.target.value)}
                          className={'inputBox'}
                          type="password"
                      />
                      <label className="errorLabel">{passwordError}</label>
                      <br />
                  </div>
              )}
              <div className={'inputContainer'}>
                  <input className={'login'} type="button" onClick={onButtonClick} value={'Delete'} />
              </div>
          </div>
      </div>
  );
}

export default DeleteInfo;