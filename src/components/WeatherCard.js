import {useEffect, useState} from "react";
import axios from "axios";

export function WeatherCard(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [weatherData, setWeatherData] = useState();

    useEffect(()=> { async function getData(){
        const fetchedData = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid="+API_KEY+"&units=metric")
        .then((res) => {setWeatherData(res.data);
            console.log(res.data)
        }
    );
            }
            
    getData();
    }, []);


return (
    <div className="flex flex-col h-[32rem] w-80 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
    mb-10 mt-12 justify-between">
        <h2 className="text-center mt-3">{weatherData.name}</h2>

        <div className="flex flex-col justify-center items-center mb-10 ml-3 mr-3">
        <p className="text-8xl">{weatherData.main.temp}°C</p>
        <p className="text-2xl">{weatherData.weather[0].main}</p>
        </div>

        <div className="flex justify-center mb-10">
       <p>Low: {weatherData.main.temp_min}°C</p>
       <p>Heigh: {weatherData.main.temp_max}°C</p>
        </div>

        <div className="grid gap-6 grid-cols-2 mr-3 ml-3 mb-3">
        <p className="text-sm flex items-center justify-center w-30 h-20 bg-gray-400 rounded-md">Humidity: {weatherData.main.humidity}%</p>
        <p className="text-sm flex items-center justify-center w-30 h-20 bg-gray-400 rounded-md">Wind: {weatherData.wind.speed}km/h</p>
        <p className="text-sm flex items-center justify-center w-30 h-20 bg-gray-400 rounded-md">Feels like: {weatherData.main.feels_like}°C</p>
        <p className="text-sm flex items-center justify-center w-30 h-20 bg-gray-400 rounded-md">Pressure: {weatherData.main.pressure}</p>
        </div>
        
    </div>
)
};
