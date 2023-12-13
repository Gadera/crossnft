import React from 'react';

interface ProfileProps {
  did: string;
}
const Profile: React.FC<ProfileProps> = ({ did }) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>Your generated DID:</p>
      <p>{did}</p>
    </div>
  );
};
export default Profile;