import React, { useState, useEffect } from 'react';
import '../../App.css';
import Button from '../Button';
import axios from 'axios';

function UpdateEmployeeInfo() {

    const[EmployeeID, setEmployeeID] = useState('')
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserData = async () => {
      try {   
        const response = await axios.get(`http://localhost:5001/api/getEmployee?query=${localStorage.getItem(Object.keys(localStorage)[0])}`);
        console.log(response.data);
        setUserData(response.data);
        if (response.data.length > 0) {
            setEmployeeID(response.data[0].Employee_id);
          }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      } 
    };

    useEffect(() => {
      fetchUserData();
    }, []);

    const onButtonClick = async () => {
      if (!firstName || !lastName || !password || !confirmPass) {
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
        console.log(EmployeeID);
        const response = await axios.put(`http://localhost:5001/api/update_employee`, {
        Employee_id: EmployeeID,
        firstName: firstName,
        lastName: lastName,
        password: password,
        });
        console.log(response.data);
          if (response.status === 201) {
              // If the request is successful, reset the form
              setFirstName('');
              setLastName('');
              setPassword('');
              setConfirmPass('');
              setLastNameError('');
              setPasswordError('');
              console.log('User Update up successfully');
              
          } else {
              console.error('Error updating:', response.statusText);
          }
      } catch (error) {
          console.error('Error updating user:', error);
      }
    }
    return (
      <div className={'mainContainer'}>
          <div className={'titleContainer'}>
              <div>Update</div>
              <div className='update_info_warning'>Retype All Info to Update Information</div>
          </div>
          <br />
          <div className={'inputContainer'}>
              {isLoading ? (
                  <div>Loading Data..</div>
              ) : (
                  <div>
                      <input
                          value={firstName}
                          placeholder={userData[0].First_Name}
                          onChange={(ev) => setFirstName(ev.target.value)}
                          className={'inputBox'}
                      />
                      <br />
                      <input
                          value={lastName}
                          placeholder={userData[0].Last_Name}
                          onChange={(ev) => setLastName(ev.target.value)}
                          className={'inputBox'}
                      />
                      <label className="errorLabel">{lastNameError}</label>
                      <br />
                      <input
                          value={password}
                          placeholder={userData[0].Password}
                          onChange={(ev) => setPassword(ev.target.value)}
                          className={'inputBox'}
                          type="password"
                      />
                      <br />
                      <input
                          value={confirmPass}
                          placeholder={userData[0].Password}
                          onChange={(ev) => setConfirmPass(ev.target.value)}
                          className={'inputBox'}
                          type="password"
                      />
                      <label className="errorLabel">{passwordError}</label>
                      <br />
                  </div>
              )}
              <div className={'inputContainer'}>
                  <input className={'login'} type="button" onClick={onButtonClick} value={'Update'} />
              </div>
          </div>
      </div>
  );
}

export default UpdateEmployeeInfo;