import { useState, useEffect } from "react"

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch("src/data.json");
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error){
                console.log(error, "error");
            }
        };
        fetchData();
    }, []);


    return(
        <div className="w-1/2 ml-auto mr-auto mt-20 grid grid-cols-1 grid-cols-2 grid-cols-3 sm:grid-row-1 sm:grid-row-2 md:w-full  ">
        <>
        {
        
            data.map((dataItem)=>(
                <div key={dataItem.id} className=" mr-20 hover:bg-teal-200 shadow-lg text-center rounded p-10 sm:w-500 text-center">
                    <img src={dataItem.image} alt="Logo" />
                    <h2 className="text-xl font-bold">{dataItem.title}</h2>
                    <p className="text-base">{dataItem.summary}</p>
                </div>
            )
            )}
            
        </>
        </div>
    )
}

export default HomePage;