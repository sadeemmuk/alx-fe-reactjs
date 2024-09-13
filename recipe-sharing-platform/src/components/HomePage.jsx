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
        <div className="w-1/2 ml-auto mr-auto mt-20 flex ">
        <>
        {
        
            data.map((dataItem)=>(
                <div key={dataItem.id} className=" mr-20 hover:bg-teal-200 shadow-lg text-center rounded p-10">
                    <image src={dataItem.image}></image>
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