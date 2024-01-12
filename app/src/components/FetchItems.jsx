import { useEffect } from "react"

const FetchItems=({setFoodData})=>{

 useEffect(()=>{
    fetch("http://localhost:9000")
    .then(res=>res.json())
    .then(data=>{
        setFoodData(data)
             }
    )
 },[])
   
    return (
        <>
            
        </>
    )
}

export default FetchItems