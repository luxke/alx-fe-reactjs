import { useState } from "react";
import { fetchGitHubUser } from "../services/githubService";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const Search = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    const userData = await fetchGitHubUser(username);
    setLoading(false);

    if (!userData) {
      setError("User not found!");
    } else {
      setUser(userData);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default Search;
