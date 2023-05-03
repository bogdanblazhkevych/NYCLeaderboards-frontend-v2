import React, {useEffect, useState} from 'react'

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

export default function DisplayAmount({inputNumber}){
    const [display, setDisplay] = useState('');

    useEffect(()=>{
        async function delay(duration) {
            return new Promise((resolve) => {
                setTimeout(resolve, duration);
            });
        }

        async function increment(number) {
            for(let i = Math.floor(inputNumber - 500); i <= number; i++) {
                await delay(1);
                setDisplay(addCurrencyFormat(i))
            }
        };

        increment(inputNumber)
    }, [inputNumber])

    return(<>{display}</>)
}