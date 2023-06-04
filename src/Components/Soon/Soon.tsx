import React from "react";
import sooncss from "./Soon.module.css"

export default function Soon(){
    return(
        <div className={sooncss.soonwrapper}>
            <div className={sooncss.soon}>
                SOON
            </div>
        </div>
    )
}