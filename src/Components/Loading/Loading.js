import React, { useEffect, useRef } from "react";
import loadingcss from "./Loading.module.css"

export default function Loading() {
    return(
        <div className={loadingcss.loadingwrapper}>
            <div className={loadingcss.loadingbox}>
            </div>
        </div>
    )
}