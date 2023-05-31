import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

interface PieChartProps {
    dataProps: [string, number][]
    colors: string[]
}

export default function PieChart(props: PieChartProps){
    const { dataProps, colors } = props
    ChartJS.register(ArcElement, Tooltip, Legend);

    const dataValues = dataProps.map((entry) => {
        return entry[1]
    })

    const dataLabels = dataProps.map((entry) => {
        return entry[0]
    })
 
    const data = {
        labels: dataLabels,
        datasets: [
            {
                label: " # of Violations",
                data: dataValues,
                backgroundColor: colors,
                borderWidth: 1
            }
        ]
    }

    const options = {
        layout: {
            padding: 20
        },
        // plugins: {
        //     legend: {
        //         display: false,
        //         position: "right",
        //         align: 'start'
        //     }
        // }
    }

    return(
        <>
            <Pie data={data} options={options}/>
        </>
    )
}