import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../apis/api";
import '../index.css';
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";
import feelsLikeIcon from "../assets/climatization.png";

export function WeatherCard({ location, handleDelete }) {
    const [weatherData, setWeatherData] = useState(null);
    const [icon, setIcon] = useState(null);

    const {lat,lon,name} = location;

    useEffect(() => {
        async function getData() {
            console.log('Fetching weather data for:', { lat, lon });
            const fetchedData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            console.log('Fetched weather data:', fetchedData.data);
            setWeatherData(fetchedData.data);
            const icon = fetchedData.data.weather[0].icon;
            setIcon(`https://openweathermap.org/img/wn/${icon}@2x.png`);
        }
        getData();
    }, [lat, lon, icon]);

    if (!weatherData) {
        console.log('Weather data is null for:', { lat, lon });
        return <div>Loading...</div>;
    }
      console.log('Rendering WeatherCard with data:', weatherData);

    const roundedTempreture = Math.floor(weatherData.main.temp);
    const roundedTempretureMin = Math.floor(weatherData.main.temp_min);
    const roundedTempretureMax = Math.floor(weatherData.main.temp_max);
    const roundedTempFeelsLike = Math.floor(weatherData.main.feels_like);
    

    return (
        <div className="flex flex-col h-[32rem] w-72 bg-gray-700 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mb-10 mt-5 justify-between">
            <button onClick={()=>handleDelete(name)} className="flex justify-end mr-5 mt-2 opacity-60 hover:opacity-100">X</button>
            <h2 className="text-center mt-5 font-bold text-2xl">{name}</h2>
            <div className="flex justify-center">
              <img className="w-32 h-32" src={icon} alt={weatherData.weather[0].main} />
              </div>
            <div className="flex flex-col justify-center items-center mb-10 ml-3 mr-3">
                <p className="text-7xl font-bold">{roundedTempreture}°C</p>
                <p className="text-xl">{weatherData.weather[0].main}</p>
                <p className="text-sm">Low: {roundedTempretureMin}°C</p>
                <p className="text-sm">High: {roundedTempretureMax}°C</p>
            </div>
            <div className="flex items-center justify-center gap-4 mr-3 ml-3 mb-5">
                <div className="flex flex-col items-center justify-center"><img src={humidityIcon} alt="humidity_icon" className="w-8 h-8" />
                <p className="text-sm flex flex-col items-center justify-center w-25 h-16">Humidity <span>{weatherData.main.humidity}%</span></p>
                </div>
                <div className="flex flex-col items-center justify-center"><img src={windIcon} alt="humidity_icon" className="w-8 h-8 icon" />
                <p className="text-sm flex flex-col items-center justify-center w-25 h-16">Wind <span>{weatherData.wind.speed}m/s</span></p>
                </div>
                <div className="flex flex-col items-center justify-center"><img src={feelsLikeIcon} alt="humidity_icon" className="w-8 h-8 icon" />
                <p className="text-sm flex flex-col items-center justify-center w-25 h-16 ">Feels like <span>{roundedTempFeelsLike}°C</span></p>
                </div>
            </div>
        </div>
    );
}
