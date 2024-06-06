import { useState } from "react";
import { SearchModal } from "./SearchModal";

export function SearchButton({addLocationHandler}){
    const [openModal, setOpenModal] = useState(false);

const modalHandler = () => {
setOpenModal(!openModal)
};



    return(
        <>
        <button onClick={modalHandler} className="w-10 h-10 rounded-full bg-orange-200 text-3xl mb-5 mt-10">+</button>
        {openModal && <SearchModal onClose={modalHandler} addLocationHandler={addLocationHandler}/>}
        </>
    )
}
