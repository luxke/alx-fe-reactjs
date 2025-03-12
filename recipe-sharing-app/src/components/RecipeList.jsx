import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const  { filteredRecipes } = useRecipeStore(state => ({filteredRecipes: state.filteredRecipes}));

    return (
      <div>
        <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id}><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> </li>
          ))}
        </ul>
      )}
      </div>
    );
  };

  export default RecipeList;