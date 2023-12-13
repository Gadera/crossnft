import React, { useState } from 'react';
import { Web5 } from '@web5/api';
import './login.css';

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const [did, setDid] = useState('');
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Connect to Web5 and obtain a DID
      const { web5, did: myDid } = await Web5.connect();
      // Check if the provided username matches the DID
      if (name === 'admin' && myDid === did) {
        // Authentication successful
        console.log('Authentication successful');
        // Redirect to some other page or perform any other actions
      } else {
        // Authentication failed
        console.log('Authentication failed');
        // Show an error message or perform any other actions
      }
    } catch (error) {
      console.error('Web5 connection error:', error);
      // Handle the error appropriately
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Decentralized Identifier (DID):
          <input type="text" value={did} onChange={(e) => setDid(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginPage;