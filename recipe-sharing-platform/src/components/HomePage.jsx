import { useState, useEffect } from 'react';
import { useRecipes } from '../context/RecipeContext';
import { Link } from 'react-router-dom'; // Import Link to navigate

const HomePage = () => {
    const [data, setData] = useState([]);
    const { recipes } = useRecipes();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json"); // Fetching from the correct path
                const jsonData = await response.json();
                setData(jsonData); // Assuming data.json is an array
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5">
            {data.map((dataItem) => (
                <div
                    key={dataItem.id}
                    className="hover:bg-teal-200 shadow-lg text-center rounded p-10 flex flex-col items-center"
                >
                        <img
                            src={dataItem.image}
                            alt={dataItem.title}
                            className="w-full h-40 object-cover rounded mb-4"
                        />
                        <h2 className="text-xl font-bold">{dataItem.title}</h2>
                        <p className="text-base">{dataItem.summary}</p>
                    <Link to={`/recipe/${dataItem.id}`} className='text-teal-500 mt-2'>
                    View Recipe</Link>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
