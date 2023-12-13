import React from 'react';
import '../App.css';

const Profile = ({ userName, did }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>User Name: {userName}</p>
      <p>DID: {did}</p>
    </div>
  );
};

export default Profile;
