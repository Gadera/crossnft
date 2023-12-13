import React, { useState } from 'react';
import { Web5 } from '@tbd54566975/web5';
import './signup.css';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      setLoading(true);

      // Generate a DID using Web5
      const { web5, did: myDid } = await Web5.connect();

      // Save the generated DID to the user's account
      await saveDIDToUserAccount(myDid);
    } catch (err) {
      setError('Error signing up');
    } finally {
      setLoading(false);
    }
  };

  const saveDIDToUserAccount = async (did) => {
    try {
      // Make an API call to save the DID to the user's account
      const response = await fetch('/save-did', {
        method: 'POST',
        body: JSON.stringify({ did }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to save DID');
      }

      
      const data = await response.json();
      console.log('DID saved successfully:', data);
    } catch (error) {
      
      console.error('Error saving DID:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <button onClick={handleSignup} disabled={loading}>
        {loading ? 'Signing up...' : 'Signup'}
      </button>
    </div>
  );
};

export default Signup;
