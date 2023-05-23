import {useEffect, useState} from 'react'
import toptencss from './toptencss.module.css'
import DisplayAmount from '../displayamount.js';
import {GiLaurelCrown} from 'react-icons/gi';
import { config } from '../config.js';
import Loading from '../Loading/Loading';

export default function Topten({currentHeat}){

    const [topTen, setTopTen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allPlatesCache, setAllPlatesCache] = useState([])
    const [passengerPlatesCache, setPassengerPlatesCache] = useState([])
    const [vanityPlatesCache, setVanityPlatesCache] = useState([])
    const [tlcPlatesCache, setTlcPlatesCache] = useState([])

    useEffect(() => {

        const heatCache = {
            "total_fines_test": allPlatesCache,
            "total_fines": passengerPlatesCache,
            "total_fines_srf": vanityPlatesCache,
            "total_fiens_omt": tlcPlatesCache
        }

        const setHeatCache = {
            "total_fines_test": setAllPlatesCache,
            "total_fines": setPassengerPlatesCache,
            "total_fines_srf": setVanityPlatesCache,
            "total_fiens_omt": setTlcPlatesCache
        }

        async function getTopTenData() {

            if (heatCache[currentHeat].length !== 0) {
                console.log("inside if:    ", heatCache[currentHeat])
                setTopTen(heatCache[currentHeat])
                return
            }
            console.log("still going....")
            setLoading(true)
            const response = await fetch(`${config.backendUrl}/topten/${currentHeat}`);
            const json = await response.json();
            setTopTen(json);
            const setFuncton = setHeatCache[currentHeat]
            setFuncton(json)
            setLoading(false)
        }

        getTopTenData();

    }, [currentHeat])

    useEffect(()=> {
        if(topTen.length !== 0){
            setCssBasedOnBigPlateWidth();
        }
    }, [topTen])

    function setCssBasedOnBigPlateWidth() {

        for(let i = 1; i <= 3; i++) {
            const element = document.getElementById("rank" + i);

            const elementfontsize = Math.ceil(element.clientWidth / 4) + "px";

            element.style.setProperty("--fontsize", elementfontsize)
        }

        const podium = document.getElementById("podium");

        const heightmargin = Math.ceil(podium.clientHeight / 3) + "px"

        podium.style.setProperty("--heightmargin", heightmargin)
        //maybe use refs instead of document.getElementById?
    }

    if (loading) {
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

                    {topTen.slice(0, 3).map((element, index)=>(
                        <div id={"rank" + (index + 1)} className={toptencss.platecover}>

                            {index === 0 && <div className={toptencss.crown}><GiLaurelCrown /></div>}

                            {element.plate}

                            {<div className={toptencss.moneyamount}><DisplayAmount inputNumber={element.total_fines}/></div>}
        
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
                            {topTen.map((violation, index)=>(
                                <tr key={violation.plate}>
                                    <td className={toptencss.ranktd}><div id={"tablerank" + (index + 1)}>{index + 1}</div></td>
                                    <td className={toptencss.platetd}>{violation.plate}</td>
                                    <td className={toptencss.totalfinestd}><DisplayAmount inputNumber={violation.total_fines}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                
            </div>
          
        </div>
    )
}