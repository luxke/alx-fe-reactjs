import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};

export const searchGitHubUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query.trim(),
        per_page: 10, 
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return [];
  }
};
