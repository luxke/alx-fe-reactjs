import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import UserCard from "./UserCard";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    const userData = await fetchUserData(username);
    setLoading(false);

    if (!userData) {
      setError("Looks like we cant find the user");
    } else {
      setUser(userData);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 p-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />} 
      {user && <UserCard user={user} />} 

      {user && (
        <div className="border p-4 rounded text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 mx-auto rounded-full mb-2"
          />
          <h2 className="text-lg font-semibold">{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
