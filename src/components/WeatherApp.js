import { SearchButton } from "./SearchButton";
import { WeatherCard } from "./WeatherCard";
import { useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

export function WeatherApp() {
    const [locations, setLocation] = useState([{ lat: 51.5073219, lon: -0.1276474 }]);

    const addLocationHandler = ({ lat, lon }) => {
        console.log('Adding location:', { lat, lon });
        setLocation(prev => [...prev, { lat, lon }]);
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-orange-50">
            <SearchButton addLocationHandler={addLocationHandler} />
            <div className="flex justify-center items-center">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={2}
                    freeMode={true}
                    centeredSlides
                    centeredSlidesBounds={false}
                    modules={[FreeMode]}
                    style={{ height: 'auto' }}
                >
                    {locations.map((location, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto', height: 'auto' }} className="animate-slideright">
                            <WeatherCard key={index} lat={location.lat} lon={location.lon} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}