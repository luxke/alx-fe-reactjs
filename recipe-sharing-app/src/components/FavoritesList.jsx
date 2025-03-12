import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { recipes, favorites, RemoveFavorite } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
    removeFavorite: state.removeFavorite,
  }));

  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div>
       <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul>
          {favoriteRecipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => RemoveFavorite(recipe.id)}>Remove Favorite</button>
            </li>
          ))}
        </ul>
      )}
        </div>
    
  );
};

export default FavoritesList;