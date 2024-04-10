import './UserProfilePage.css';

import React, { useState, useEffect } from 'react';

const UserProfilePage = () => {
  // State to hold user data
  const [userData, setUserData] = useState(null);

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      // Replace 'apiEndpoint' with your actual API endpoint to fetch user data
      const response = await fetch('apiEndpoint');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
        <div className='ProfileBox'>
          <div className="ProfileImgContainer">
            <img className='ProfileImg' alt="Profile" src={"../../images/default_profile_picture.jpg"} />
          </div>
          <div className='ProfileTextContainer'>
          <h2 className='ProfileName'>{"TEMP NAME"}</h2>
          <table>
            <tbody>
              <tr>
                <td className='ProfileInfoRight'>Email</td>
                <td className='ProfileInfoLeft'>{'Loading...'}</td>
              </tr>
              <tr>
                <td className='ProfileInfoRight'>UFID</td>
                <td className='ProfileInfoLeft'>{"12345678"}</td>
              </tr>
              <tr>
                <td className='ProfileInfoRight'>Past Carts</td>
                <td className='ProfileInfoLeft'>{"Link to carts"}</td>
              </tr>
             
            </tbody>
          </table>
          </div>
        </div>
    </div>
  );
};

export default UserProfilePage;
