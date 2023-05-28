import React from "react";
import heatselectcss from './heatselectcss.module.css'
import { useState } from 'react'

interface HeatSelectProps {
    setCurrentHeat: (heat: string) => void;
}

export default function HeatSelect(props: HeatSelectProps){
    const { setCurrentHeat } = props;

    const [styledId, setStyledId] = useState<string>("total_fines")
    
    function handleClick(e: React.MouseEvent<HTMLDivElement>){
        setCurrentHeat(e.currentTarget.id)
        setStyledId(e.currentTarget.id)
    }

    function getCurrentStyle(divId: string){
        if (divId === styledId) {
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