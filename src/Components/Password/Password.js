import React, { useState, useEffect, useRef } from "react";
import passwordcss from "./password.module.css"
import { config } from './../config.js'

export default function Password({setIsAuthenticated}){
    const inputRef = useRef(null)

    const [inputPass, setInputPass] = useState('')
    const [localIsAuthenticated, setLocalIsAuthenticated] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    

    async function handleKeyDown(e){
        if (e.key === 'Enter') {
            setIsFetching(true)
            const response = await fetch(`${config.backendUrl}/password/${inputPass}`);
            const json = await response.json();
            setIsAuthenticated(json.authenticated);
            setLocalIsAuthenticated(json.authenticated);
            setIsFetching(false)
        }
    }

    function handleChange(e){
        setInputPass(e.target.value)
    }

    async function delay(duration) {
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });
    }

    async function wrondPassword(){
        if (localIsAuthenticated === false) {
            inputRef.current.style.transition = "none"
            inputRef.current.style.border = "1px solid red"
            await delay(500)
            inputRef.current.style.transition = "border 2s"
            inputRef.current.style.border = "1px solid transparent"
        }
    }

    useEffect(() => {
        if (isFetching === false) {
            wrondPassword()
        }
    }, [isFetching])

    return(
        <div className={passwordcss.passwordwrapper}>
            <div className={passwordcss.password}>

                <div className={passwordcss.heading}>
                    <div className={passwordcss.name}>
                        NYC Leaderboards
                    </div>
                    <div className={passwordcss.beta}>
                        BETA  1.0.31
                    </div>
                </div>

                <input className={passwordcss.passinput} type="password" placeholder="PASSWORD" onKeyDown={handleKeyDown} onChange={handleChange} value={inputPass} ref={inputRef}>
                </input>

            </div>
        </div>
    )
}