import { useState } from "react";
import axios from "axios";
import { API_KEY } from "../apis/api";

export function SearchModal({ onClose, addLocationHandler }) {
    const [input, setInput] = useState("");

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${API_KEY}`);
            if (res.data.length > 0) {
                const { lat, lon } = res.data[0];
                const name = res.data[0].local_names['en'] || res.data[0].name;
                addLocationHandler({ lat, lon, name});
                setInput("");
                onClose();
            } else {
                console.error('Sorry...No location has found');
            }
        } catch (error) {
            console.error('Something went wrong while fetching location:', error);
        }
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input onChange={inputHandler} value={input} type="text" name="search" placeholder="Search for location" className="pr-4 pl-4 pt-2 pb-2 rounded-lg w-72 text-slate-800"/>
            </form>
        </>
    );
}