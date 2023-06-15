import {useEffect, useState, useRef} from 'react'
import toptencss from './toptencss.module.css'
import {GiLaurelCrown} from 'react-icons/gi';
import { config, TopTenDataPropsInterface, HeatCacheInterface, SetHeatCacheInterface } from '../config';
import Loading from '../Loading/Loading';
import DisplayAmount from '../displayamount';

export default function Topten(props: TopTenDataPropsInterface){

    const {currentHeat, allPlatesCache, setAllPlatesCache, passengerPlatesCache, setPassengerPlatesCache, vanityPlatesCache, setVanityPlatesCache, tlcPlatesCache, setTlcPlatesCache} = props

    const heatCache: HeatCacheInterface = {
        "total_fines_test": allPlatesCache,
        "total_fines": passengerPlatesCache,
        "total_fines_srf": vanityPlatesCache,
        "total_fines_omt": tlcPlatesCache
    }

    const setHeatCache: SetHeatCacheInterface = {
        "total_fines_test": setAllPlatesCache,
        "total_fines": setPassengerPlatesCache,
        "total_fines_srf": setVanityPlatesCache,
        "total_fines_omt": setTlcPlatesCache
    }

    // why is this function declared inside the effect? Why is it getting re-declared every time
    
    useEffect(() => {
        async function getTopTenData() {
            if (heatCache[currentHeat].length > 0) {
                return
            }
    
            const response = await fetch(`${config.backendUrl}/topten/${currentHeat}`)
            const json = await response.json();
            setHeatCache[currentHeat](json)
        }
        
        getTopTenData();
    }, [currentHeat])

    useEffect(()=> {
        if(heatCache[currentHeat].length !== 0){
            setCssBasedOnBigPlateWidth();
        }
    }, [heatCache[currentHeat]])

    function setCssBasedOnBigPlateWidth() {
        for(let i = 1; i <= 3; i++) {
            const element = document.getElementById("rank" + i);

            if (element) {
                const elementfontsize = Math.ceil(element.clientWidth / 4) + "px";
                element.style.setProperty("--fontsize", elementfontsize)
            }
        }

        const podium = document.getElementById("podium");

        if (podium === null) {
            return;
        }

        const heightmargin = `${Math.ceil(podium.clientHeight / 3)}px`;

        podium.style.setProperty("--heightmargin", heightmargin)
        //maybe use refs instead of document.getElementById?
    }

    if (heatCache[currentHeat].length === 0) {
        return (
            <div className={toptencss.loadingwrapper}>
                <Loading />
            </div>
        )
    }

    return (
        <div className={toptencss.toptenwrapper}>

            <div className={toptencss.toptenresults}>

                <div className={toptencss.podium} id="podium">

                    {heatCache[currentHeat].slice(0, 3).map((element, index)=>(
                        <div id={"rank" + (index + 1)} className={toptencss.platecover}>

                            {index === 0 && <div className={toptencss.crown}><GiLaurelCrown /></div>}

                            {element.plate}

                            {<div className={toptencss.moneyamount}><DisplayAmount inputNumber={Number(element.total_fines)}/></div>}
        
                        </div>
                    ))}

                </div>

                <div className={toptencss.toptentable}>

                    <table>
                        <thead className={toptencss.toptenthead}>
                            <tr>
                                <th className={toptencss.rankth}>Rank</th>
                                <th className={toptencss.plateth}>Plate</th>
                                <th className={toptencss.totalfinesth}>Total Fines</th>
                            </tr>
                        </thead>
                        <tbody className={toptencss.toptentbody}>
                            {heatCache[currentHeat].map((violation, index)=>(
                                <tr key={violation.plate}>
                                    <td className={toptencss.ranktd}><div id={"tablerank" + (index + 1)}>{index + 1}</div></td>
                                    <td className={toptencss.platetd}>{violation.plate}</td>
                                    <td className={toptencss.totalfinestd}><DisplayAmount inputNumber={Number(violation.total_fines)}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                
            </div>
          
        </div>
    )
}