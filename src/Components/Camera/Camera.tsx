import React from "react";
import LiveFeed from "../Livefeed/Livefeed";
import cameracss from "./Cameracss.module.css"

export default function Camera() {
    return (
        <div className={cameracss.camerawrapper}>
            <div className={cameracss.camera}>
                feature very early in development <br />please ignore
                <LiveFeed />
            </div>
        </div>
    )
}