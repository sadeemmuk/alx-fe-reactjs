import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams(); // Get the recipe ID from the URL
    const [recipe, setRecipe] = useState(null); // State to hold the selected recipe
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(false); // State for error handling

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json"); // Ensure this path is correct
                const jsonData = await response.json();
                
                console.log("Fetched data:", jsonData); // Log fetched data
                
                // Convert the ID to a number before comparing
                const selectedRecipe = jsonData.find((recipe) => recipe.id === parseInt(id));

                console.log("Selected recipe ID:", id); // Log the recipe ID from the URL
                console.log("Found recipe:", selectedRecipe); // Log the found recipe
                
                if (selectedRecipe) {
                    setRecipe(selectedRecipe); // Set the found recipe to state
                } else {
                    setError(true); // If recipe is not found, set error state to true
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(true); // Handle error case
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, [id]); // Re-run effect when the ID changes

    if (loading) {
        return <div>Loading...</div>; // Display while fetching data
    }

    if (error) {
        return <div>Recipe not found</div>; // Display if the recipe is not found
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold">Ingredients:</h2>
            <ul className="list-disc pl-5 mb-4">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold">Instructions:</h2>
            <ol className="list-decimal pl-5">
                {recipe.instructions.map((step, index) => (
                    <li key={index} className="mb-2">{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetail;