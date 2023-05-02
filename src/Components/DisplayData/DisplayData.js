import React from "react";
import Searchdata from "../SearchData/Searchdata";
import Topten from "../TopTen/Topten";

export default function DisplayData({currentDisplay, currentHeat, currentSearchQuerry}){

    function renderDisplay(selectedDisplay, selectedHeat, selectedQuerry){

        if(selectedDisplay === "topten"){
            return <Topten currentHeat={selectedHeat}/>
        }
        if(selectedDisplay === "search"){
            return <Searchdata currentHeat={selectedHeat} currentQuerry={selectedQuerry}/>
        }
    }

    return(
        <div style={{color: 'white'}}>
            {renderDisplay(currentDisplay, currentHeat, currentSearchQuerry)}
        </div>
    )
}