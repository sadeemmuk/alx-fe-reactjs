import { useState } from 'react';
import {fetchUserData} from '../services/githubService';

const Search = () => {
  // State to store input value and fetched user data
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]); 

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data.items); 
    } catch (err) {
      setError('No users found or an error occurred', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">GitHub Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter GitHub username"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            id="minRepos"
            placeholder="Enter minimum repository count"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData.length > 0 && (
        <div className="mt-6 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-medium">{user.login}</h3>
                <p className="text-sm">{user.location}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;