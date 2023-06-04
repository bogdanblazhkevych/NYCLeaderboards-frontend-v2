export interface PlateDataInterface {
    plate: string,
    state: string,
    issue_date: string,
    fine_amount: string,
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

interface SetPlateDataInterface {
    (data: PlateDataInterface[]): void
}

export interface SearchDataPropsInterface {
    currentHeat: string,
    currentQuerry: string
}

export interface ViolationNamesObjectInterface {
    [key: string]: string
}

export interface CountObjectInterface {
    [key: string]: number
}

export interface TopTenDataPropsInterface {
    currentHeat: string,
    allPlatesCache: PlateDataInterface[],
    setAllPlatesCache: SetPlateDataInterface,
    passengerPlatesCache: PlateDataInterface[],
    setPassengerPlatesCache: SetPlateDataInterface,
    vanityPlatesCache: PlateDataInterface[],
    setVanityPlatesCache: SetPlateDataInterface,
    tlcPlatesCache: PlateDataInterface[],
    setTlcPlatesCache: SetPlateDataInterface,
}

export interface HeatCacheInterface {
    [key: string]: PlateDataInterface[]
}

export interface SetHeatCacheInterface {
    [key: string]: SetPlateDataInterface
}

interface TopTenInterface {
    "plate": string,
    "total_fines": number,
    "sequence": number
}





// interface CountObject {
//     [key: string]: number
// }

interface ConfigInterface {
    backendURL: string,
    topTenPlaceHolder: TopTenInterface[],
    searchPlaceHolder: PlateDataInterface[],
    countPlaceHolder: [string, number][]
}


export const config = {
    backendUrl: "http://api.leaderboards.nyc", //delete when uploading to git. to tesl loacly, replace with http://<your ip>:<your server port>
    topTenPlaceHolder : [
        {
            "plate": "BVH5939",
            "total_fines": 23350,
            "sequence": 1
        },
        {
            "plate": "CDV7028",
            "total_fines": 22465,
            "sequence": 2
        },
        {
            "plate": "FEG1020",
            "total_fines": 14390,
            "sequence": 3
        },
        {
            "plate": "FEG1030",
            "total_fines": 13805,
            "sequence": 4
        },
        {
            "plate": "KKJ8695",
            "total_fines": 12135,
            "sequence": 5
        },
        {
            "plate": "HCA1440",
            "total_fines": 11605,
            "sequence": 6
        },
        {
            "plate": "GZJ1588",
            "total_fines": 11390,
            "sequence": 7
        },
        {
            "plate": "HUL8233",
            "total_fines": 10845,
            "sequence": 8
        },
        {
            "plate": "HNC7667",
            "total_fines": 10755,
            "sequence": 9
        },
        {
            "plate": "DXS1450",
            "total_fines": 10440,
            "sequence": 10
        }
    ],
    searchPlaceHolder: [
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-09-10T04:00:00.000Z",
            "fine_amount": 115,
            "county": "K",
            "violation": "FIRE HYDRANT",
            "summons_number": "8983835539",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-03-16T04:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "EXPIRED MUNI METER",
            "summons_number": "8982953097",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-05-13T04:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8982111876",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-05-03T04:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8982110070",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-07-09T04:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8980368781",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-05-18T04:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8978262028",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-11-13T05:00:00.000Z",
            "fine_amount": 65,
            "county": "K",
            "violation": "REG. STICKER-EXPIRED/MISSING",
            "summons_number": "8976382638",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-07-08T04:00:00.000Z",
            "fine_amount": 65,
            "county": "K",
            "violation": "STREET CLEANING",
            "summons_number": "8975869301",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-06-12T04:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8974715284",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-03-02T05:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8972950026",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2022-06-27T04:00:00.000Z",
            "fine_amount": 60,
            "county": "K",
            "violation": "NO PARKING",
            "summons_number": "8933514661",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-12-08T05:00:00.000Z",
            "fine_amount": 115,
            "county": "K",
            "violation": "FIRE HYDRANT",
            "summons_number": "8896341050",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-12-08T05:00:00.000Z",
            "fine_amount": 65,
            "county": "K",
            "violation": "REG. STICKER-EXPIRED/MISSING",
            "summons_number": "8896341048",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2022-05-11T04:00:00.000Z",
            "fine_amount": 65,
            "county": "K",
            "violation": "REG. STICKER-EXPIRED/MISSING",
            "summons_number": "8888246071",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2020-12-08T05:00:00.000Z",
            "fine_amount": 115,
            "county": "K",
            "violation": "FIRE HYDRANT",
            "summons_number": "8874873608",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2022-02-12T05:00:00.000Z",
            "fine_amount": 65,
            "county": "K",
            "violation": "REG. STICKER-EXPIRED/MISSING",
            "summons_number": "8874812504",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-01-21T05:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8868963711",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2020-12-24T05:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8868959628",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2020-09-22T04:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8832009754",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2020-12-16T05:00:00.000Z",
            "fine_amount": 35,
            "county": "K",
            "violation": "NO METER RECPT",
            "summons_number": "8819030718",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2019-11-23T05:00:00.000Z",
            "fine_amount": 65,
            "county": "K",
            "violation": "REG. STICKER-EXPIRED/MISSING",
            "summons_number": "8794061490",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-01-06T05:00:00.000Z",
            "fine_amount": 60,
            "county": "K",
            "violation": "NO PARKING",
            "summons_number": "8788392480",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2020-01-08T05:00:00.000Z",
            "fine_amount": 60,
            "county": "Q",
            "violation": "NO PARKING",
            "summons_number": "8775257117",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2019-10-03T04:00:00.000Z",
            "fine_amount": 45,
            "county": "K",
            "violation": "STREET CLEANING",
            "summons_number": "8769962704",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2019-10-23T04:00:00.000Z",
            "fine_amount": 115,
            "county": "K",
            "violation": "FIRE HYDRANT",
            "summons_number": "8764086331",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2020-09-10T04:00:00.000Z",
            "fine_amount": null,
            "county": null,
            "violation": null,
            "summons_number": "8749020110",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2019-04-18T04:00:00.000Z",
            "fine_amount": 95,
            "county": "K",
            "violation": "NO STANDING-EXC. TRUCK LOADING",
            "summons_number": "8738559675",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2018-12-13T05:00:00.000Z",
            "fine_amount": 65,
            "county": "K",
            "violation": "NO INSPECTION",
            "summons_number": "8724754602",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2019-08-16T04:00:00.000Z",
            "fine_amount": 45,
            "county": "K",
            "violation": "STREET CLEANING",
            "summons_number": "8708186030",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2022-02-09T05:00:00.000Z",
            "fine_amount": 60,
            "county": "K",
            "violation": "NO PARKING",
            "summons_number": "8690430775",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2022-02-14T05:00:00.000Z",
            "fine_amount": 65,
            "county": "K",
            "violation": "REG. STICKER-EXPIRED/MISSING",
            "summons_number": "8607842158",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2023-01-06T05:00:00.000Z",
            "fine_amount": 50,
            "county": "BK",
            "violation": "SCHOOL ZONE SPEEDING",
            "summons_number": "4821310314",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-11-17T05:00:00.000Z",
            "fine_amount": 50,
            "county": "BK",
            "violation": "SCHOOL ZONE SPEEDING",
            "summons_number": "4757026493",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-08-26T04:00:00.000Z",
            "fine_amount": 50,
            "county": "BK",
            "violation": "SCHOOL ZONE SPEEDING",
            "summons_number": "4746278192",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-06-28T04:00:00.000Z",
            "fine_amount": 50,
            "county": "BK",
            "violation": "SCHOOL ZONE SPEEDING",
            "summons_number": "4738153523",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-03-25T04:00:00.000Z",
            "fine_amount": 50,
            "county": "BK",
            "violation": "SCHOOL ZONE SPEEDING",
            "summons_number": "4726906562",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2021-03-08T05:00:00.000Z",
            "fine_amount": 50,
            "county": "BK",
            "violation": "SCHOOL ZONE SPEEDING",
            "summons_number": "4724966373",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2020-11-11T05:00:00.000Z",
            "fine_amount": 50,
            "county": "QN",
            "violation": "SCHOOL ZONE SPEEDING",
            "summons_number": "4714187909",
            "total_fines": 2190,
            "sequence": 633
        },
        {
            "plate": "CRINGE",
            "state": "NY",
            "issue_date": "2020-08-21T04:00:00.000Z",
            "fine_amount": 50,
            "county": "BK",
            "violation": "SCHOOL ZONE SPEEDING",
            "summons_number": "4704220874",
            "total_fines": 2190,
            "sequence": 633
        }
    ],
    countPlaceHolder: [
        [
            "NO METER RECPT",
            10
        ],
        [
            "SCHOOL ZONE SPEEDING",
            8
        ],
        [
            "REG. STICKER-EXPIRED/MISSING",
            6
        ],
        [
            "FIRE HYDRANT",
            4
        ],
        [
            "STREET CLEANING",
            4
        ],
        [
            "NO PARKING-STREET CLEANING",
            3
        ],
        [
            "EXPIRED MUNI METER",
            1
        ],
        [
            "NO STANDING-EXC. TRUCK LOADING",
            1
        ],
        [
            "NO INSPECTION",
            1
        ]
    ]
}