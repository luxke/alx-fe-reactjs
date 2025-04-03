import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import { fetchGitHubUser } from "./services/githubService";

function App() {
  const [count, setCount] = useState(0)
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
    <>
      <div>
      <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {user && <UserCard user={user} />}
      </div>
      </div>
    </>
  )
}

export default App
