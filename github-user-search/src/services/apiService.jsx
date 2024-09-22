import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}` // Use the API key if needed
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export default fetchGitHubUser;