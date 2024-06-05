import { useState } from "react";
import { SearchModal } from "./SearchModal";

export function SearchButton({addLocationHandler, setLocationName}){
    const [openModal, setOpenModal] = useState(false);

const openModalHandler = () => {
setOpenModal(true)
};

const closeModalHandler= () => {
    setOpenModal(false)
}

    return(
        <>
        <button onClick={openModalHandler} className="w-10 h-10 rounded-full bg-orange-200 text-3xl mb-5 mt-10">+</button>
        {openModal && <SearchModal onClose={closeModalHandler} addLocationHandler={addLocationHandler} setLocationName={setLocationName}/>}
        </>
    )
}
