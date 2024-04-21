import './UserProfilePage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Button } from '../Button';

const UserProfilePage = ({UFID}) => {
  // State to hold user data
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 // const [clicked, setClicked] = useState(false);
  const fetchUserData = async () => {
    try {   
      const response = await axios.get(`http://localhost:5001/api/getuser?query=${localStorage.getItem(Object.keys(localStorage)[0])}`);
      console.log(response.data);
      setUserData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoading(false);
    } 
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
        <div className='ProfileBox'>
          <div className='ProfileTextContainer'>
            <div className="ProfileImgContainer">
              <img className='ProfileImg' alt="Profile" src={"../../images/default_profile_picture.jpg"} />
            </div>
            {userData.length > 0 ? (
            <div>
          <h2 className='ProfileName' style={{textAlign: 'center'}}>{userData[0].First_Name} {userData[0].Last_Name}</h2>
          <table>
            <tbody>
              <tr>
                <td className='ProfileInfoRight'>UFID</td>
                <td className='ProfileInfoLeft'>{userData[0].UFID}</td>
              </tr>
              <tr>
                <td className='ProfileInfoRight'>Points</td>
                <td className='ProfileInfoLeft'>{userData[0].Points}</td>
              </tr>
              <tr>
                <td className='ProfileInfoRight'>Phone Number</td>
                <td className='ProfileInfoLeft'>{userData[0].Phone_Number}</td>
              </tr>
              <tr>
                <td className='ProfileInfoRight'>Past Carts</td>
                <td className='ProfileInfoLeft'>{"Link to carts"}</td>
              </tr>
            </tbody>
          </table>
          <div className={'buttons-container'}>
          <Button destination='/update-info' buttonStyle='btn--outline2'>UPDATE</Button>
          <Button destination='/delete-info' buttonStyle='btn--outline2'>DELETE</Button>
          </div>
          </div>
        ) : (
          <div>Loading Data..</div>
        )}
        </div>
        </div>
    </div>
  );
};

export default UserProfilePage;
