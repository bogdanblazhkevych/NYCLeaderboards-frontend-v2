import React, { useEffect, useRef } from "react";
import loadingcss from "./Loading.module.css"

export default function Loading() {

    const angles = [36, 72, 108, 144, 180, 216, 252, 288, 324, 360];
    const tick0 = useRef(null)
    const tick1 = useRef(null)
    const tick2 = useRef(null)
    const tick3 = useRef(null)
    const tick4 = useRef(null)
    const tick5 = useRef(null)
    const tick6 = useRef(null)
    const tick7 = useRef(null)
    const tick8 = useRef(null)
    const tick9 = useRef(null)
    const tickRefArr = [tick0, tick1, tick2, tick3, tick4, tick5, tick6, tick7, tick8, tick9]


    useEffect(()=>{
        let count = 0

        const interval = setInterval(()=>{
            function getTargetArray(arr, num){
                let returnArr = [];
                for (let i = 0; i < arr.length; i++){
                    let index = num % arr.length - i
                    if (index < 0) {
                        index += arr.length
                    }
                    returnArr.push(index)
                }
                return returnArr
            }

            tickRefArr.forEach((ref, index) => {
                if (!ref.current) { return }

                let targetArr = getTargetArray(tickRefArr, count);

                if (targetArr.includes(index)) {
                    ref.current.style.opacity = `${100 - (targetArr.indexOf(index) * 10)}%`
                } else {
                    ref.current.style.opacity = `0%`
                }
            })
            count++
        }, 60)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return(
        <div className={loadingcss.loadingwrapper}>
            <div className={loadingcss.loadingbox}>
                {angles.map((angle, index) => {
                    return <div ref={tickRefArr[index]} className={loadingcss.tick} style={{transform: `rotate(${angle}deg)`}}></div>
                })}
            </div>
        </div>
    )
}