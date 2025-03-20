import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './RecipeList.jsx'
import AddRecipeForm from './AddRecipeForm.jsx'
import EditRecipeForm from './EditRecipeForm.jsx'
import SearchBar from './SearchBar.jsx'
import FavoritesList from './FavoritesList.jsx'
import RecommendationsList from './RecommendationsList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecipeList/>
    <AddRecipeForm/>
    <SearchBar />
    <FavoritesList />
    <RecommendationsList />
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
      </Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
