import React from "react";
import navbarcss from "./Navbarcss.module.css";
import { ImSearch, ImCamera, ImListNumbered } from 'react-icons/im'
import { useEffect, useState } from 'react'
import { JsxEmit } from "typescript";

interface NavbarProps {
    setCurrentDisplay: (currentDisplay: string) => void,
    currentDisplay: string
}

interface ButtonsInterface {
    Id: string,
    Icon: JSX.Element,
    Classname: string
}

export default function Navbar(props: NavbarProps) {
    const { setCurrentDisplay, currentDisplay } = props;
    const [currentSelection, setCurrentSelection] = useState<string>("topten");

    const buttons: ButtonsInterface[] = [
        {Id: "topten", Classname: navbarcss.toptenbutton, Icon: <ImListNumbered />},
        {Id: "search", Classname: navbarcss.searchbutton, Icon: <ImSearch />},
        {Id: "camera", Classname: navbarcss.camerabutton, Icon: <ImCamera />}
    ]

    useEffect(()=> {
        setCurrentSelection(currentDisplay)
    }, [currentDisplay])

    function changeDisplay(e: React.MouseEvent<HTMLDivElement>): void {
        let displayTarget = e.currentTarget.id;
        setCurrentDisplay(displayTarget)
        setCurrentSelection(displayTarget)
    }

    function changeStyle(target: string) {
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

                {buttons.map((button) => {
                    return <div className={button.Classname} id={button.Id} onClick={changeDisplay} style={changeStyle(button.Id)}>{button.Icon}</div>
                })}

                {/* <div className={navbarcss.toptenbutton} id="topten" onClick={changeDisplay} style={changeStyle('topten')}>
                    <ImListNumbered />
                </div>

                <div className={navbarcss.searchbutton} id="search" onClick={changeDisplay} style={changeStyle('search')}>
                    <ImSearch />
                </div>

                <div className={navbarcss.camerabutton} id="camera" onClick={changeDisplay} style={changeStyle('camera')}>
                    <ImCamera />
                </div> */}

            </div>

        </div>
    )
}