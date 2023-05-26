import React from "react";
import navbarcss from "/Users/bogdanblazhkevych/Desktop/new-violations-frontend/src/Components/Navbar/Navbarcss.module.css";
import { ImSearch, ImCamera, ImListNumbered } from 'react-icons/im'
import { useEffect, useState } from 'react'

export default function Navbar({ setCurrentDisplay, currentDisplay }) {
    const [currentSelection, setCurrentSelection] = useState("topten")

    useEffect(()=> {
        setCurrentSelection(currentDisplay)
    }, [currentDisplay])

    function changeDisplay(e) {
        let displayTarget = e.currentTarget.id;
        setCurrentDisplay(displayTarget)
        setCurrentSelection(e.currentTarget.id)
    }

    function changeStyle(target) {
        if(target === currentSelection){
            return {color: '#2D2D2D', backgroundColor: 'white'}
        }

        return {}
    }

    return(
        <div className={navbarcss.navbar}>
            <div className={navbarcss.title}>
                NYC LEADERBOARDS
            </div>

            <div className={navbarcss.menu}>

                <div className={navbarcss.toptenbutton} id="topten" onClick={changeDisplay} style={changeStyle('topten')}>
                    <ImListNumbered />
                </div>

                <div className={navbarcss.searchbutton} id="search" onClick={changeDisplay} style={changeStyle('search')}>
                    <ImSearch />
                </div>

                <div className={navbarcss.camerabutton} id="camera" onClick={changeDisplay} style={changeStyle('camera')}>
                    <ImCamera />
                </div>

            </div>

        </div>
    )
}