import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipes from "../data.json"; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600 text-xl">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md shadow-md"
      />
      <h1 className="text-3xl font-bold text-gray-900 mt-4">{recipe.title}</h1>
      <p className="text-gray-700 mt-2">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">Ingredients</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">Instructions</h2>
      <ol className="list-decimal list-inside text-gray-700 mt-2">
        {recipe.instructions?.map((step, index) => (
          <li key={index} className="mt-1">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
