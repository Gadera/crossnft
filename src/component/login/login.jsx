import React, { useState } from 'react';
import { Web5 } from '@tbd54566975/web5';
import { verifyCredential } from 'did-jwt-vc';
import './login.css';

const Login = () => {

  const [did, setDid] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [vcJwt, setVcJwt] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { web5, did: myDid } = await Web5.connect();
      setDid(myDid);
      
      const isVerified = await verifyVerifiableCredential(vcJwt);
      if (isVerified) {
        
        console.log('Login succeed');
      } else {
        setError('Invalid Verifiable Credential');
      }
    } catch (err) {
      setError('Error logging in');
    } finally {
      setLoading(false);
    }
  };

  // Verify Verifiable Credential function
  const verifyVerifiableCredential = async (vcJwt) => {
    try {
      const isVerified = await verifyCredential(vcJwt);
      return isVerified;
    } catch (error) {
      console.error('Error verifying Verifiable Credential:', error);
      return false;
    }
  };

  // Render the component
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={vcJwt}
        onChange={(e) => setVcJwt(e.target.value)}
        placeholder="Enter Verifiable Credential JWT"
      />
      {error && <p>{error}</p>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
