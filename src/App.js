import { Search } from "./components/Search";
import { WeatherCard } from "./components/WeatherCard";

function App() {
  return (
      <div className="w-full h-[32rem] flex  flex-col justify-center items-center mb-10 mt-28">
        <Search/>
      <WeatherCard/>
      </div>
  );
}

export default App;
