import React, { useState } from "react";
import { ReactElement } from "react";
// import Camera from "../Camera/Camera";
import Searchdata from "../SearchData/Searchdata";
import Topten from "../TopTen/Topten";

interface DisplayDataProps {
    currentDisplay: string,
    currentHeat: string,
    currentSearchQuerry: string
}

interface SearchPlateData {
    plate: string,
    state: string,
    issue_date: string,
    fine_amount: number,
    county: string,
    violation: string,
    summons_number: string,
    total_fines: string,
    sequence: number,
    license_type: string,
    violation_time: string,
    judgment_entry_date: any,
    penalty_amount: string,
    interest_amount: string,
    reduction_amount: string,
    payment_amount: string,
    amount_due: string,
    precinct: string,
    issuing_agency: string,
    violation_status: any,
    summons_image: string
}

interface TopTenPlateData {
    plate: string,
    state: string,
    license_type: string,
    total_fines: string,
    is_passanger: boolean,
    is_vanity: boolean,
    is_taxi: boolean 
}

export default function DisplayData(props: DisplayDataProps){
    const { currentDisplay, currentHeat, currentSearchQuerry } = props;

    const [allPlatesCacheTopLevel, setAllPlatesCacheTopLevel] = useState<TopTenPlateData[]>([])
    const [passengerPlatesCacheTopLevel, setPassengerPlatesCacheTopLevel] = useState<TopTenPlateData[]>([])
    const [vanityPlatesCacheTopLevel, setVanityPlatesCacheTopLevel] = useState<TopTenPlateData[]>([])
    const [tlcPlatesCacheTopLevel, setTlcPlatesCacheTopLevel] = useState<TopTenPlateData[]>([])

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