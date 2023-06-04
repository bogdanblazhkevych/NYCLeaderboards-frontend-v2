import React from "react";
import navbarcss from "./Navbarcss.module.css";
import { ImSearch, ImCamera, ImListNumbered } from 'react-icons/im'
import { useEffect, useState } from 'react'
import { JsxEmit } from "typescript";

interface NavbarProps {
    setCurrentDisplay: (currentDisplay: string) => void,
    currentDisplay: string
}

export default function Navbar(props: NavbarProps) {
    const { setCurrentDisplay, currentDisplay } = props;
    const [currentSelection, setCurrentSelection] = useState<string>("topten");
    
    useEffect(()=> {
        setCurrentSelection(currentDisplay)
    }, [currentDisplay])

    function changeDisplay(e: React.MouseEvent<HTMLDivElement>): void {
        setCurrentDisplay(e.currentTarget.id)
        setCurrentSelection(e.currentTarget.id)
    }

    function changeStyle(target: string): { [key: string]: string } {
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
