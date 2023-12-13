import React, { useState } from 'react';
import { Web5 } from '@tbd54566975/web5';
import './signup.css';
const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [generatedDid, setGeneratedDid] = useState('');
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const generatedDID = await generateDID();

    await storeDIDInUserProfile(generatedDID);

    setGeneratedDid(generatedDID);
  };
  const generateDID = async () => {
    const { did: myDid } = await Web5.connect();
    return myDid;
  };
  const storeDIDInUserProfile = async (did: string) => {
   
  };
  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      {generatedDid && <p>Generated DID: {generatedDid}</p>}
    </form>
  );
};
export default Signup;