const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      setLoading(true);
      setError('');

      const { web5, did: myDid } = await Web5.connect();
      await saveDIDToUserAccount(myDid);
    } catch (err) {
      setError('Error during signup. Please try again.'); 
    } finally {
      setLoading(false);
    }
  };

  const saveDIDToUserAccount = async (did) => {
    try {
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
      setError('Failed to save DID. Please try again.'); 
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleSignup} disabled={loading}>
        {loading ? 'Signing up...' : 'Signup'}
      </button>
    </div>
  );
};

export default Signup;
