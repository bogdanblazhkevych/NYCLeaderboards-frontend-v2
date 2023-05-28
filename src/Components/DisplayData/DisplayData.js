import React, { useState } from "react";
import Camera from "../Camera/Camera";
import Searchdata from "../SearchData/Searchdata";
import Topten from "../TopTen/Topten";

export default function DisplayData({currentDisplay, currentHeat, currentSearchQuerry}){
    const [allPlatesCacheTopLevel, setAllPlatesCacheTopLevel] = useState([])
    const [passengerPlatesCacheTopLevel, setPassengerPlatesCacheTopLevel] = useState([])
    const [vanityPlatesCacheTopLevel, setVanityPlatesCacheTopLevel] = useState([])
    const [tlcPlatesCacheTopLevel, setTlcPlatesCacheTopLevel] = useState([])

    function renderDisplay(selectedDisplay, selectedHeat, selectedQuerry){

        if (selectedDisplay === "topten") {
            return <Topten currentHeat={selectedHeat} allPlatesCache={allPlatesCacheTopLevel} setAllPlatesCache={setAllPlatesCacheTopLevel} passengerPlatesCache={passengerPlatesCacheTopLevel} setPassengerPlatesCache={setPassengerPlatesCacheTopLevel} vanityPlatesCache={vanityPlatesCacheTopLevel} setVanityPlatesCache={setVanityPlatesCacheTopLevel} tlcPlatesCache={tlcPlatesCacheTopLevel} setTlcPlatesCache={setTlcPlatesCacheTopLevel}/>
        }
        if (selectedDisplay === "search") {
            return <Searchdata currentHeat={selectedHeat} currentQuerry={selectedQuerry}/>
        }
        // if (selectedDisplay === "camera") {
        //     return <Camera />
        // }

    }

    return(
        <div style={{color: 'white'}}>
            {renderDisplay(currentDisplay, currentHeat, currentSearchQuerry)}
        </div>
    )
}