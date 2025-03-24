import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-red-500">Recipe not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mt-4"
      />
      <p className="mt-4 text-lg">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside mt-2">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal list-inside mt-2">
        {recipe.instructions?.map((step, index) => (
          <li key={index} className="text-gray-700 mt-1">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
