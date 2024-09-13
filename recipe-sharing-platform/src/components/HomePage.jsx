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
        <div className="w-1/2 ml-auto mr-auto mt-20 ">
        <>
        {
        
            data.map((dataItem)=>(
                <div key={dataItem.id} className=" mr-20 ">
                    <image src={dataItem.image}></image>
                    <h2>{dataItem.title}</h2>
                    <p>{dataItem.summary}</p>
                </div>
            )
            )}
            
        </>
        </div>
    )
}

export default HomePage;