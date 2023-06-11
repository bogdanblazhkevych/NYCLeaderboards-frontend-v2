import React, { useState } from "react";
import { ReactElement } from "react";
import Searchdata from "../SearchData/Searchdata";
import { PlateDataInterface } from "../config"
import Topten from "../TopTen/Topten";

interface DisplayDataProps {
    currentDisplay: string,
    currentHeat: string,
    currentSearchQuerry: string
}

export default function DisplayData(props: DisplayDataProps){
    const { currentDisplay, currentHeat, currentSearchQuerry } = props;

    const [allPlatesCacheTopLevel, setAllPlatesCacheTopLevel] = useState<PlateDataInterface[]>([])
    const [passengerPlatesCacheTopLevel, setPassengerPlatesCacheTopLevel] = useState<PlateDataInterface[]>([])
    const [vanityPlatesCacheTopLevel, setVanityPlatesCacheTopLevel] = useState<PlateDataInterface[]>([])
    const [tlcPlatesCacheTopLevel, setTlcPlatesCacheTopLevel] = useState<PlateDataInterface[]>([])

    function renderDisplay(selectedDisplay: string, selectedHeat: string, selectedQuerry: string): ReactElement{

        if (selectedDisplay === "topten") {
            return <Topten currentHeat={selectedHeat} allPlatesCache={allPlatesCacheTopLevel} setAllPlatesCache={setAllPlatesCacheTopLevel} passengerPlatesCache={passengerPlatesCacheTopLevel} setPassengerPlatesCache={setPassengerPlatesCacheTopLevel} vanityPlatesCache={vanityPlatesCacheTopLevel} setVanityPlatesCache={setVanityPlatesCacheTopLevel} tlcPlatesCache={tlcPlatesCacheTopLevel} setTlcPlatesCache={setTlcPlatesCacheTopLevel}/>
        }
        if (selectedDisplay === "search") {
            return <Searchdata currentHeat={selectedHeat} currentQuerry={selectedQuerry}/>
        }
        else {
            return <></>
        }
    }

    return(
        <div style={{color: 'white'}}>
            {renderDisplay(currentDisplay, currentHeat, currentSearchQuerry)}
        </div>
    )
}