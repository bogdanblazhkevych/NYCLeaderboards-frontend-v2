import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function PieChart({dataProps, colors}){
    ChartJS.register(ArcElement, Tooltip, Legend);

    // const colors = [        
    // "#FFFFFF", // white
    // "#F75D59", // coral pink
    // "#6C9EB2", // steel blue
    // "#F7B32B", // goldenrod
    // "#9852DE", // violet
    // "#53A440", // lime green
    // "#E7473C", // brick red
    // "#FFD700", // gold
    // "#4D4F5C", // gunmetal
    // "#B66325", // bronze
    // "#8D6E63", // taupe
    // "#3B3E4E", // charcoal
    // "#CF625C", // salmon
    // "#67AEBF", // cerulean
    // "#E1A95F", // sand
    // "#D08DD1", // lavender
    // "#63B76C", // moss green
    // "#FF8C00", // dark orange
    // "#C87F89", // rose
    // "#7A6C5D", // khaki
    // "#964C63", // mauve
    // "#A7C6DA", // baby blue
    // "#F08080", // light coral
    // "#556270", // slate blue
    // "#D5A253", // brass
    // "#749D6F", // sage green
    // "#C94C4C", // indian red
    // "#6A7E94", // steel gray
    // "#BB8FCE", // periwinkle
    // "#FFA07A", // light salmon
    // "#456990", // royal blue
    // "#A68064", // khaki brown
    // "#9B4F54", // rosy brown
    // "#7891A1", // light steel blue
    // ]

    // const colorsTwo = [
    //     "#E6AF2E", // Yellow
    //     "#A87F32", // Gold
    //     "#C3423F", // Red
    //     "#5F9EA0", // Teal
    //     "#BD4139", // Dark Red
    //     "#2D95BF", // Blue
    //     "#007D5C", // Dark Teal
    //     "#F0A202", // Amber
    //     "#4C4E48", // Dark Grey
    //     "#CB8584", // Dusty Rose
    //     "#3E5A5F", // Steel Blue
    //     "#E8C547", // Mustard
    //     "#74626C", // Muted Purple
    //     "#248EA6", // Deep Teal
    //     "#EF8B38", // Orange
    //     "#6A6661", // Charcoal
    //     "#D96153", // Coral
    //     "#739CA8", // Dusty Teal
    //     "#FFD700", // Gold
    //     "#7D9BAE", // Slate Blue
    //     "#E59400", // Dark Orange
    //     "#BFBFBF", // Light Grey
    //     "#9F8681", // Taupe
    //     "#BC987E", // Tan
    //     "#E86F68", // Salmon
    //     "#3D9CA8", // Cerulean
    //     "#FFA500", // Orange
    //     "#E5E5E5", // Light Grey
    //     "#FFC0CB", // Pink
    //     "#D8C0A8", // Beige
    //     "#C0C0C0", // Silver
    //     "#FFDAB9", // Peach
    //     "#F5F5F5", // White Smoke
    //     "#F8F8F8", // Ghost White
    //     "#FFFFFF"  // White
    // ]

    // const colorsThree = [
    //     '#5f3a3a',
    //     "#405f3a",
    //     "#3a5f5e",
    //     "#3a405f",
    //     "#493a5f",
    //     "#5b3a5f",
    //     "#5f3a46",
    //     "#5f4c3a",
    //     "#535f3a",
    //     "#3a5f45",
    //     "#403a5f",
    //     "#573a5f"
    // ]

    // const violationsCount = dataProps

    // const newObject = {}

    // const newObjectSortedKeys = Object.keys(violationsCount).sort((a, b) => {
    //     return violationsCount[b] - violationsCount[a]
    // })

    // for(let key in newObjectSortedKeys){
    //     newObject[newObjectSortedKeys[key]] = violationsCount[newObjectSortedKeys[key]]
    // }

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
        plugins: {
            legend: {
                display: false,
                position: 'right',
                align: 'start'
            }
        }
    }

    return(
        <>
            <Pie data={data} options={options}/>
        </>
    )
}