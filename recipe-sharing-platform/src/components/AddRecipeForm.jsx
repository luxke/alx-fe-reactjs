import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!recipe.title.trim()) tempErrors.title = "Title is required";
    if (!recipe.ingredients.trim()) tempErrors.ingredients = "Ingredients are required";
    if (!recipe.steps.trim()) tempErrors.steps = "Preparation steps are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddRecipe(recipe);
      setRecipe({ title: "", ingredients: "", steps: "" }); 
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <label className="block text-lg font-medium text-gray-700">Recipe Title:</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

       
        <div>
          <label className="block text-lg font-medium text-gray-700">Ingredients:</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="List ingredients, separated by commas"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        
        <div>
          <label className="block text-lg font-medium text-gray-700">Preparation Steps:</label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the cooking steps"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;