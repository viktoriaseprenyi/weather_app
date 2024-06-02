import { SearchButton } from "./components/SearchButton";
import {  SearchModal } from "./components/SearchModal";
import { WeatherCard } from "./components/WeatherCard";

function App() {
  return (
      <div className="w-full flex flex-col justify-center items-center bg-slate-900">
        <SearchButton/>
        <SearchModal/>
      <WeatherCard/>
      <WeatherCard/>
      <WeatherCard/>
      </div>
  );
}

export default App;
