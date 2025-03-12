import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'

  const RecipeList = () => {
    const  { filteredRecipes, favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({filteredRecipes: state.filteredRecipes,
      favorites: state.favorites,
      addFavorite: state.addFavorite,
      removeFavorite: state.removeFavorite,
    }));

    return (
      <div>
        <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id}><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> 
            <button
                onClick={() =>
                  favorites.includes(recipe.id)
                    ? removeFavorite(recipe.id)
                    : addFavorite(recipe.id)
                }
              >
                {favorites.includes(recipe.id) ? '★ Favorited' : '☆ Favorite'}
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>
    );
  };

  export default RecipeList;