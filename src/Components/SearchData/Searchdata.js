import { useState, useEffect, useRef } from 'react'
import searchdatacss from './searchdatacss.module.css'
import PieChart from '../PieChart/PieChart'
import { config } from '../config'
import Loading from '../Loading/Loading'

export default function Searchdata({currentHeat, currentQuerry}){

    const colors = [
        '#5f3a3a',
        "#405f3a",
        "#3a5f5e",
        "#3a405f",
        "#493a5f",
        "#5b3a5f",
        "#5f3a46",
        "#5f4c3a",
        "#535f3a",
        "#3a5f45",
        "#403a5f",
        "#573a5f"
    ]

    const display = useRef(null)

    const [data, setData] = useState([])
    const [violationCount, setViolationCount] = useState([])
    const [totalFines, setTotalFines] = useState([])
    const [loading, setLoading] = useState(false)
    const [noResults, setNoResults] = useState(false)

    useEffect(()=> { 

        async function getPlateData() {
            setNoResults(false)
            setLoading(true)
            const response = await fetch(`${config.backendUrl}/license-plate/${currentQuerry}/${currentHeat}`);
            const json = await response.json();
            if (json.length === 0) {
                setNoResults(true);
                setLoading(false);
                return
            }
            setData(cleanData(json));
            getCount(json);
            setLoading(false);
        }

        // async function getTotalFines() {
        //     fetch(`${config.backendUrl}/license-plate/${currentHeat}`)
        //     .then(response => response.json())
        //     .then(totalfinesdata => {
        //         setTotalFines(totalfinesdata);
        //     })
        //     .catch(error => console.error(error))
        // }

        if(currentQuerry.length > 0){
            getPlateData();
            // getTotalFines();
        }

    }, [currentQuerry, currentHeat])

    // useEffect(() => {
    //     console.log("display use effect")
    //     if(display.current){
    //         console.log("here")
    //         setCssBasedOnWidth()
    //     }
    // }, [display.current])

    function cleanData(data) {
        
        const cleanData = data.map((instance) => {
            const message = {
                "FAIL TO DSPLY MUNI METER RECPT": "NO METER RECPT",
                "NO STANDING-DAY/TIME LIMITS": "NO STANDING DTL",
                "NO STANDING-COMM METER ZONE": "NO STANDING COM ZONE",
                "INSP. STICKER-EXPIRED/MISSING": "NO INSPECTION",
                "INSP STICKER-MUTILATED/C'FEIT": "FAKE/OBSTRUCTED INSP",
                "NO PARKING-DAY/TIME LIMITS": "NO PARKING DTL",
                "PHTO SCHOOL ZN SPEED VIOLATION": "SCHOOL ZONE SPEEDING",
                "FAILURE TO STOP AT RED LIGHT": "RED LIGHT CAMERA",
                "NO PARKING-STREET CLEANING": "STREET CLEANING",
                "REG. STICKER-EXPIRED/MISSING": "NO REGISTRATION"
            }[instance.violation];

            if (message) {
                instance.violation = message;
            }

            return instance;
        })

        return cleanData

    }
    
    function getCount(arr) {
        let countObject = {};

        arr.forEach((entry) => {
            if (countObject[entry.violation]) {
                countObject[entry.violation]++
            } else if (entry.violation !== null) {
                countObject[entry.violation] = 1
            }
        })

        const sortedEntries = Object.entries(countObject).sort((a, b) => {
            return b[1] - a[1]
        })
        
        setViolationCount(sortedEntries)
    }

    function addCurrencyFormat(str) {
        const num = parseInt(str);
        if (isNaN(num)) {
            return str;
        }
        const formattedNum = num.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formattedNum;

    }

    function makeDate(rawDate) {
        const dateObject = new Date(rawDate);
        const options = {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
        }
        const date = dateObject.toLocaleDateString("en-US", options)
        return date
    }

    function splitString(str) {
        if(typeof str !== "string") {
            return;
        }

        if(str.length > 27) {
            let newString = str.slice(0, 27) + "..."
            return newString
        }

        return str
    }

    function getPercent(totalsum, platesum) {
        const decimal = (platesum * 100) / totalsum;
        const percent = decimal.toFixed(6) + "%"
        return percent
    }

    if (loading) {
        return (
            <div className={searchdatacss.loadingwrapper}>
                <Loading />
            </div>
        )
    }

    if (noResults) {
        return (
            <div className={searchdatacss.noresultswrapper}>
                <div>
                    Oh No! The search came back empty. It could be for a few reasons:
                </div>
                <div className={searchdatacss.listwrapper}>
                    <div>
                        1. The plate you entered has no fines
                    </div>
                    <div>
                        2. The plate you entered does not belong to this heat
                    </div>
                    <div>
                        3. The plate you entered does not exist
                    </div>
                </div>
            </div>
        )
    }

    if (!loading && data.length === 0) {
        return (
            <div className={searchdatacss.initialwrapper}>
                Enter a license plate and select a heat
            </div>
        )
    }

    return(
        <div className={searchdatacss.platesearchwrapper} id="platesearchwrapper">
            <div className={searchdatacss.bigplatewrapper} id="bigplatewrapper">
            <div ref={display} className={searchdatacss.bigplate} id={"bigplate" + data[0].sequence}>
                {data[0].plate}
                <div className={searchdatacss.totalfines} id="totalfines">
                    <div className={searchdatacss.totalfinesamount}>
                        {data.length !== 0 && addCurrencyFormat(data[0].total_fines)}
                    </div>
                    <div className={searchdatacss.totalfinesrank}>
                        RANK {data[0].sequence}
                    </div>
                </div>
            </div>      
            </div>

            <div className={searchdatacss.tablewrapperfadewrapper}>
                <span className={searchdatacss.fade}></span>
                <div className={searchdatacss.tablewrapper} id="tablewrapper">
                    <table className={searchdatacss.datatable}>
                        <thead>
                            <tr className={searchdatacss.searchtr}>
                                <th className={searchdatacss.offenseth}>Offense</th>
                                <th className={searchdatacss.dateth}>Date</th>
                                <th className={searchdatacss.fineth}>Fine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((violation) => {
                                if (violation.violation === null) {
                                    return
                                }

                                return (
                                    <tr className={searchdatacss.searchtr} key={violation.summons_number}>
                                        <td className={searchdatacss.offensetd}>{violation.violation}</td>
                                        <td className={searchdatacss.datetd}>{makeDate(violation.issue_date)}</td>
                                        {/* <td className={searchdatacss.finetd}><DisplayAmount inputNumber={violation.fine_amount}/></td> */}
                                        <td className={searchdatacss.finetd}>{addCurrencyFormat(violation.fine_amount)}</td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>

                    <div className={searchdatacss.tallywrapper}>

                        <h1>TOTAL</h1>

                        <table className={searchdatacss.tallytable}>

                            <thead>

                                <tr className={searchdatacss.tallyheadtr}>

                                    <th className={searchdatacss.tallythviolation}>Offense</th>
                                    <th className={searchdatacss.tallythcount}>Count</th>

                                </tr>

                            </thead>

                            <tbody>

                                {violationCount.map((key, index) => {
                                    return (
                                        <tr className={searchdatacss.tallytr} key={index}>
                                            <td className={searchdatacss.violationtallytd}>{key[0]}<div style={{height: "0.8rem", aspectRatio: "1/1", backgroundColor: colors[index % colors.length], display: "inline-block", borderRadius: "50%", marginLeft: "0.5rem"}}></div></td>
                                            <td className={searchdatacss.counttd}>{key[1]}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>

            {/* <div className={searchdatacss.contributiontext} id="contributiontext">
                <span className={searchdatacss.contributiontotalfines}>{addCurrencyFormat(totalFines[0].allfinestotal)}</span>
                <br></br>
                In fines issued since 2016. You account for
                <br></br>
                <span className={searchdatacss.contributionpercent}>{getPercent(totalFines[0].allfinestotal, data[0].total_fines)}</span>
            </div> */}

            <div className={searchdatacss.piechartwrapper}>
                <PieChart dataProps={violationCount} colors={colors}/>
            </div>

        </div>
    )
}