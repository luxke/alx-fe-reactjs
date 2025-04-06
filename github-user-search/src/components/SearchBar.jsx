import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch({ username, location, minRepos });
      setUsername("");
      setLocation("");
      setMinRepos("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username..."
        className="border p-2 rounded"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location (optional)..."
        className="border p-2 rounded"
      />
      <input
        type="number"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        placeholder="Minimum repositories (optional)..."
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
