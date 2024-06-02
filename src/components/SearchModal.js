import { useEffect,useState } from "react"
import axios from "axios";

export function SearchModal(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const [fetchedLocation, setFetchedLocation] = useState();
    const [input,setInput] =useState();
    
    useEffect(()=> {
        async function getData(){
         const data = await axios.get("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid="+API_KEY)

        } 
        getData();
     },[])

     const submitHandler = (e)=> {
        e.preventDefault();
     };

     const inputHandler = () => {
        setInput(input)
     };

    return(
        <>
        <form onSubmit={submitHandler}>
            <input onChange={inputHandler} value={input} type="text" name="search" placeholder="Search for location" />
        </form>
        </>
    )
}