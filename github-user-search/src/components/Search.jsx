import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  // State to store input value and fetched user data
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null); 

    try {
      const data = await fetchUserData(username);
      setUserData(data); 
    } catch (err) {
      setError('Looks like we cant find the user', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {/* Conditional rendering based on API state */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h3>{userData.name}</h3>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;