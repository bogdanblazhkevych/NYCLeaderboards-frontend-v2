import { useState, useEffect, useRef } from 'react'
import searchdatacss from './searchdatacss.module.css'
import { config, PlateDataInterface, SearchDataPropsInterface, ViolationNamesObjectInterface, CountObjectInterface } from '../config'
import Loading from '../Loading/Loading'
import PieChart from '../PieChart/PieChart'

export default function Searchdata(props: SearchDataPropsInterface){
    const { currentHeat, currentQuerry } = props 

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

    const [data, setData] = useState<PlateDataInterface[]>([])
    const [violationCount, setViolationCount] = useState<[string, number][]>([])
    const [loading, setLoading] = useState(false)
    const [noResults, setNoResults] = useState(false)

    useEffect(()=> { 

        async function getPlateData() {
            setNoResults(false)
            setLoading(true)
            const response = await fetch(`${config.backendUrl}/license-plate/${currentQuerry}/${currentHeat}`);
            const json: PlateDataInterface[] = await response.json();
            if (json.length === 0) {
                setNoResults(true);
                setLoading(false);
                return
            }
            setData(cleanData(json));
            getCount(json);
            setLoading(false);
        }

        if(currentQuerry.length > 0){
            getPlateData();
        }

    }, [currentQuerry, currentHeat])

    function cleanData(data: PlateDataInterface[]) {
        
        const cleanData = data.map((instance: PlateDataInterface): PlateDataInterface => {

            const violationNamesObject: ViolationNamesObjectInterface = {
                "ALTERING INTERCITY BUS PERMIT": "ALTR INTERCITY BUS",
                "ANGLE PARKING": "ANGLE PARKING",
                "ANGLE PARKING-COMM VEHICLE": "ANGLE PARKING-COMM",
                "BEYOND MARKED SPACE": "BEYOND MARKED SPACE",
                "BIKE LANE": "BIKE LANE",
                "BLUE ZONE": "BLUE ZONE",
                "BUS LANE VIOLATION": "BUS LANE VIOLATION",
                "BUS PARKING IN LOWER MANHATTAN": "BUS PARKING IN L. MANH",
                "COMML PLATES-UNALTERED VEHICLE": "COMML PLATES-UNALTERED",
                "CROSSWALK": "CROSSWALK",
                "DETACHED TRAILER": "DETACHED TRAILER",
                "DIVIDED HIGHWAY": "DIVIDED HIGHWAY",
                "DOUBLE PARKING": "DOUBLE PARKING",
                "DOUBLE PARKING-MIDTOWN COMML": "DBL PARK-MIDTOWN COMML",
                "ELEVATED/DIVIDED HIGHWAY/TUNNL": "ELEV/DIV HWY/TUNNL",
                "EXCAVATION-VEHICLE OBSTR TRAFF": "EXCAVATION-VEH OBSTR",
                "EXPIRED METER": "EXPIRED METER",
                "EXPIRED METER-COMM METER ZONE": "EXPIRED METER-COMM",
                "EXPIRED MUNI METER": "EXPIRED MUNI METER",
                "EXPIRED MUNI MTR-COMM MTR ZN": "EXPIRED MUNI-COMM",
                "FAIL TO DISP. MUNI METER RECPT": "NO MUNI RECPT",
                "FAIL TO DSPLY MUNI METER RECPT": "NO METER RECPT",
                "FAILURE TO DISPLAY BUS PERMIT": "NO BUS PERMIT",
                "FAILURE TO STOP AT RED LIGHT": "RED LIGHT CAMERA",
                "FEEDING METER": "FEEDING METER",
                "FIRE HYDRANT": "FIRE HYDRANT",
                "FRONT OR BACK PLATE MISSING": "MISSING PLATE",
                "IDLING": "IDLING",
                "IMPROPER REGISTRATION": "IMPR REGISTRATION",
                "INSP STICKER-MUTILATED/C'FEIT": "FAKE/OBSTRUCTED INSP",
                "INSP. STICKER-EXPIRED/MISSING": "NO INSPECTION",
                "INTERSECTION": "INTERSECTION",
                "MARGINAL STREET/WATER FRONT": "MARGINAL ST/WATER",
                "MIDTOWN PKG OR STD-3HR LIMIT": "MIDTOWN PKG/STD-3HR",
                "MISCELLANEOUS": "MISCELLANEOUS",
                "MISSING EQUIPMENT": "MISSING EQUIPMENT",
                "NGHT PKG ON RESID STR-COMM VEH": "NGHT PKG-RESID-COMM",
                "NIGHTTIME STD/ PKG IN A PARK": "NGHT STD/PKG-PARK",
                "NO MATCH-PLATE/STICKER": "NO MATCH-PLATE/STICKER",
                "NO OPERATOR NAM/ADD/PH DISPLAY": "NO OPERATOR INFO",
                "NO PARKING-DAY/TIME LIMITS": "NO PARKING DTL",
                "NO PARKING-EXC. AUTH. VEHICLE": "NO PARKING-AUTH VEH",
                "NO PARKING-EXC. HNDICAP PERMIT": "NO PARKING-HNDICAP",
                "NO PARKING-EXC. HOTEL": "NO PARKING-HOTEL",
                "NO STANDING-DAY/TIME LIMITS": "NO STANDING DTL",
                "NO STANDING-COMM METER ZONE": "NO STANDING COM ZONE",
                "PHTO SCHOOL ZN SPEED VIOLATION": "SCHOOL ZONE SPEED",
                "REG. STICKER-EXPIRED/MISSING": "NO REGISTRATION",
                "NO PARKING-STREET CLEANING": "STREET CLEANING"
            };

            const message: string = violationNamesObject[instance.violation]

            if (message) {
                instance.violation = message;
            }

            return instance;
        })

        return cleanData

    }
    
    function getCount(arr: PlateDataInterface[]): void {
        let countObject: CountObjectInterface = {};

        arr.forEach((entry: PlateDataInterface) => {
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

    function addCurrencyFormat(str: string): string {
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

    function makeDate(rawDate: string) {
        const dateObject = new Date(rawDate);
        const options: Intl.DateTimeFormatOptions = {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
        }
        const date = dateObject.toLocaleDateString("en-US", options)
        return date
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

            <div className={searchdatacss.piechartwrapper}>
                <PieChart dataProps={violationCount} colors={colors}/>
            </div>

        </div>
    )
}