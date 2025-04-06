import { useState } from "react";
import { searchGitHubUsers } from "../services/githubService";
import UserCard from "./UserCard";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    const results = await searchGitHubUsers({ username, location, minRepos });
    setLoading(false);

    if (!results || results.length === 0) {
      setError("Looks like we can't find any users.");
    } else {
      setUsers(results);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Search
        </button>
      </form>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Search;
