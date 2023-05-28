import React from "react";
import heatselectcss from '/Users/bogdanblazhkevych/Desktop/new-violations-frontend/src/Components/HeatSelect/heatselectcss.module.css'
import { useState } from 'react'

export default function HeatSelect({setCurrentHeat}){

    const [styledId, setStyledId] = useState("total_fines")
    
    function handleClick(e){
        setCurrentHeat(e.currentTarget.id)
        setStyledId(e.currentTarget.id)
    }

    function getCurrentStyle(divId){
        if(divId === styledId){
            // return {color: '#101010', backgroundColor: '#F5F5F7', fontWeight: 'bold'}
            return {color: 'white', backgroundColor: 'rgb(39,45,65)', fontWeight: 'bold'}
        }

        return {}
    }

    return(

        <div className={heatselectcss.meggawrapper}>

            <div className={heatselectcss.heatselectwrapper}>

                <div className={heatselectcss.container}>

                    <div className={heatselectcss.passengerheat} id="total_fines" onClick={handleClick} style={getCurrentStyle("total_fines")}>
                        Passenger Plates
                    </div>
                    <div className={heatselectcss.allheat} id="total_fines_srf" onClick={handleClick} style={getCurrentStyle("total_fines_srf")}>
                        Vanity Plates
                    </div>
                    <div className={heatselectcss.tlcheat} id="total_fines_omt" onClick={handleClick} style={getCurrentStyle("total_fines_omt")}>
                        TLC Plates
                    </div>
                    <div className={heatselectcss.allheat} id="total_fines_test" onClick={handleClick} style={getCurrentStyle("total_fines_test")}>
                        All Plates
                    </div>

                </div>

            </div>

        </div>
    )
}