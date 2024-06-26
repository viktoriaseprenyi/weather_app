import { SearchButton } from "./SearchButton";
import { WeatherCard } from "./WeatherCard";
import { useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

export function WeatherApp() {
    const [locations, setLocation] = useState([{ lat: 51.5073219, lon: -0.1276474, name: "London"}]);


    const addLocationHandler = ({ lat, lon, name }) => {
        console.log('Adding location:', { lat, lon, name });
        const isDuplication = locations.some(location => location.lat === lat && location.lon === lon);
        if(isDuplication){
          return
        } else {
        setLocation(prev => [...prev, { lat, lon, name }]);
      }
    };

    const handleDelete = (locationName) => {
      setLocation((prevLocations) =>
          prevLocations.filter((location) => location.name !== locationName)
      );
  };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-400 via-purple-300 to-pink-400">
            <SearchButton addLocationHandler={addLocationHandler} />
            <div className="flex justify-center items-center">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    freeMode={true}
                    centeredSlides
                    centeredSlidesBounds={false}
                    modules={[FreeMode]}
                    style={{ height: 'auto' }}
                >
                    {locations.map((location, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto', height: 'auto' }} className="animate-slideright">
                            <WeatherCard key={index} location={location} handleDelete={handleDelete}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}