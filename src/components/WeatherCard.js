import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../apis/api";
import '../index.css';

export function WeatherCard({ lat, lon }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function getData() {
            console.log('Fetching weather data for:', { lat, lon });
            const fetchedData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            console.log('Fetched weather data:', fetchedData.data);
            setWeatherData(fetchedData.data);
        }
        getData();
    }, [lat, lon]);

    if (!weatherData) {
        console.log('Weather data is null for:', { lat, lon });
        return <div>Loading...</div>;
    }
    console.log('Rendering WeatherCard with data:', weatherData);
    
    return (
        <div className="flex flex-col h-[32rem] w-80 bg-sunny rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 mb-10 mt-5 mr-10 justify-between">
            <h2 className="text-center mt-5">{weatherData.name}</h2>
            <div className="flex flex-col justify-center items-center mb-10 ml-3 mr-3">
                <p className="text-7xl">{weatherData.main.temp}°C</p>
                <p className="text-2xl">{weatherData.weather[0].main}</p>
            </div>
            <div className="flex justify-center mb-10 gap-4">
                <p>Low: {weatherData.main.temp_min}°C</p>
                <p>High: {weatherData.main.temp_max}°C</p>
            </div>
            <div className="grid gap-6 grid-cols-2 mr-3 ml-3 mb-5">
                <p className="text-sm flex items-center justify-center w-25 h-16 bg-gray-400 rounded-md">Humidity: {weatherData.main.humidity}%</p>
                <p className="text-sm flex items-center justify-center w-25 h-16 bg-gray-400 rounded-md">Wind: {weatherData.wind.speed}km/h</p>
                <p className="text-sm flex items-center justify-center w-25 h-16 bg-gray-400 rounded-md">Feels like: {weatherData.main.feels_like}°C</p>
                <p className="text-sm flex items-center justify-center w-25 h-16 bg-gray-400 rounded-md">Pressure: {weatherData.main.pressure}</p>
            </div>
        </div>
    );
}
