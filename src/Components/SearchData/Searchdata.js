import {useState, useEffect, useRef} from 'react'
import searchdatacss from '/Users/bogdanblazhkevych/Desktop/new-violations-frontend/src/Components/SearchData/searchdatacss.module.css'
import DisplayAmount from '../displayamount'
import PieChart from '../PieChart/PieChart'
import { config } from '../config'

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

    const [data, setData] = useState(config.searchPlaceHolder)
    const [violationCount, setViolationCount] = useState(config.countPlaceHolder)
    const [totalFines, setTotalFines] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> { 

        async function getPlateData() {
            fetch(`${config.backendUrl}/license-plate/${currentQuerry}/${currentHeat}`)
            .then(response => response.json())
            .then(data => {
                setData(cleanData(data));
                getCount(data);
                console.log(data)
            })
            .catch(error => console.error(error))
        }

        async function getTotalFines() {
            fetch(`${config.backendUrl}/license-plate/${currentHeat}`)
            .then(response => response.json())
            .then(totalfinesdata => {
                setTotalFines(totalfinesdata);
            })
            .catch(error => console.error(error))
        }

        if(currentQuerry.length > 0){
            setLoading(true);
            getPlateData();
            getTotalFines();
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
            
            if (instance.violation === "FAIL TO DSPLY MUNI METER RECPT") {
                instance.violation = "NO METER RECPT"
                return instance
            } else if (instance.violation === "NO STANDING-DAY/TIME LIMITS") {
                instance.violation = "NO STANDING"
                return instance
            } else if (instance.violation === "NO STANDING-COMM METER ZONE") {
                instance.violation = "NO STANDING COM ZONE"
                return instance
            } else if (instance.violation === "INSP. STICKER-EXPIRED/MISSING") {
                instance.violation = "NO INSPECTION"
                return instance
            } else if (instance.violation === "INSP STICKER-MUTILATED/C'FEIT") {
                instance.violation = "FAKE/OBSTRUCTED INSP"
                return instance
            } else if (instance.violation === "NO PARKING-DAY/TIME LIMITS") {
                instance.violation = "NO PARKING"
                return instance
            } else if (instance.violation === "NO PARKING-STREET CLEANING") {
                instance.violation = "STREET CLEANING"
                return instance
            } else if (instance.violation === "PHTO SCHOOL ZN SPEED VIOLATION") {
                instance.violation = "SCHOOL ZONE SPEEDING"
                return instance
            } else if (instance.violation === "FAILURE TO STOP AT RED LIGHT") {
                instance.violation = "RED LIGHT CAMERA"
                return instance
            } else {
                return instance
            }
        })

        return cleanData

    }
    
    function getCount(arr) {

        // let countObject = {};
        // let sortedObject = {};
        // let sortedObjectKeys;

        // arr.forEach((entry)=> {

        //     if(Object.keys(countObject).includes(entry.violation)) {
        //         countObject[entry.violation]++
        //     }else if(entry.violation !== null) {
        //         countObject[entry.violation] = 1
        //     }

        // })

        // sortedObjectKeys = Object.keys(countObject).sort((a, b) => {
        //     return countObject[b] - countObject[a]
        // })

        // for(let key in sortedObjectKeys){
        //     sortedObject[sortedObjectKeys[key]] = countObject[sortedObjectKeys[key]]
        // }
        
        // setViolationCount(sortedObject)

        let countObject = {};

        arr.forEach((entry) => {
            if (countObject[entry.violation]) {
                countObject[entry.violation]++
            } else if (entry.violation !== null) {
                countObject[entry.violation] = 1
            }
        })

        let sortedEntries = Object.entries(countObject).sort((a, b) => {
            return b[1] - a[1]
        })

        let sortedObject = Object.fromEntries(sortedEntries)

        setViolationCount(sortedObject)
        console.log(sortedObject)
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
        // if(window.innerWidth < 600) {
        //     return str
        // }
        if(typeof str !== "string") {
            return
        }
        if(str.length > 27) {
            let newString = str.slice(0, 27) + "..."
            return newString
        }else { 
            return str
        }
    }

    function getPercent(totalsum, platesum) {
        const decimal = (platesum * 100) / totalsum;
        const percent = decimal.toFixed(6) + "%"
        return percent
    }

    if(data.length === 0){
        return <>loading...</>
    }
    // if(totalFines.length === 0){
    //     return <>loading...</>
    // }

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

                            {data.map((violation)=>(
                                <tr className={searchdatacss.searchtr} key={violation.summons_number}>

                                    <td className={searchdatacss.offensetd}>{splitString(violation.violation)}</td>
                                    <td className={searchdatacss.datetd}>{makeDate(violation.issue_date)}</td>
                                    {/* <td className={searchdatacss.finetd}><DisplayAmount inputNumber={violation.fine_amount}/></td> */}
                                    <td className={searchdatacss.finetd}>{addCurrencyFormat(violation.fine_amount)}</td>
                                    
                                </tr>
                            ))}

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

                                {Object.keys(violationCount).map((key, index) => (
                                    <tr className={searchdatacss.tallytr} key={index}>
                                        <td className={searchdatacss.violationtallytd}>{key}<div style={{height: "0.8rem", aspectRatio: "1/1", backgroundColor: colors[index % colors.length], display: "inline-block", borderRadius: "50%", marginLeft: "0.5rem"}}></div></td>
                                        <td className={searchdatacss.counttd}>{violationCount[key]}</td>
                                    </tr>
                                ))}

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