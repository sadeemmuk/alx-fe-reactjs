import React,{ useState } from 'react';
import { fetchGitHubUser } from './services/apiService';
import Layout from './components/Layout';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url}>GitHub Profile</a>
        </div>
      )}
    </div> 
    </Layout>
  );
}



export default App;