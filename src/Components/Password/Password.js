import React, { useState, useEffect } from "react";
import passwordcss from "./password.module.css"
import { config } from './../config.js'

export default function Password({setIsAuthenticated}){

    const [inputPass, setInputPass] = useState('')
    

    async function handleKeyDown(e){
        if (e.key === 'Enter') {
            const response = await fetch(`${config.backendUrl}/password/${inputPass}`);
            const json = await response.json();
            setIsAuthenticated(json.authenticated)
        }
    }

    function handleChange(e){
        setInputPass(e.target.value)
    }

    return(
        <div className={passwordcss.passwordwrapper}>
            <div className={passwordcss.password}>

                <div className={passwordcss.heading}>
                    <div className={passwordcss.name}>
                        NYC Leaderboards
                    </div>
                    <div className={passwordcss.beta}>
                        BETA  1.0.2
                    </div>
                </div>

                <input className={passwordcss.passinput} type="password" placeholder="PASSWORD" onKeyDown={handleKeyDown} onChange={handleChange} value={inputPass}>
                </input>

            </div>
        </div>
    )
}