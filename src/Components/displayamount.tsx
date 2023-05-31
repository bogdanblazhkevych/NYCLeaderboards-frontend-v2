import React, {useEffect, useState} from 'react'

function addCurrencyFormat(num: number) {
    // const num = parseInt(str);

    // if (isNaN(num)) {
    //     return str;
    // }

    const formattedNum = num.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    return formattedNum;
}

interface DisplayAmountInterface {
    inputNumber: number
}

export default function DisplayAmount(props: DisplayAmountInterface){
    const { inputNumber } = props
    const [display, setDisplay] = useState('');

    useEffect(()=>{
        async function delay(duration: number) {
            return new Promise((resolve) => {
                setTimeout(resolve, duration);
            });
        }

        async function increment(number: number) {
            for(let i = Math.floor(inputNumber - 500); i <= number; i++) {
                await delay(1);
                setDisplay(addCurrencyFormat(i))
            }
        };

        increment(inputNumber)
    }, [inputNumber])

    return(<>{display}</>)
}