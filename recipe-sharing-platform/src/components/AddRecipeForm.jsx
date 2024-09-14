import { useState } from "react";
import { useRecipes } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate(); // For programmatic navigation
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    if (!title) newErrors.title = "Title is not validate";
    if (!ingredients || ingredients.split("\n").length < 2)
      newErrors.ingredients = "Please include at least 2 ingredients";
    if (!steps) newErrors.steps = "Preparation steps are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit the form
    setErrors({});
    
    const newRecipe = {
      id: Date.now(), // Simple unique ID based on timestamp
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
      image: "https://via.placeholder.com/150" // Default image URL
    };

    addRecipe(newRecipe); // Add the recipe to the context

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form className="bg-white p-8 shadow-md rounded" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Add a New Recipe</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Ingredients</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter each ingredient on a new line"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter each step on a new line"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-2 rounded mt-4 hover:bg-teal-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
