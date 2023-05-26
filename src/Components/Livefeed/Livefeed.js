import React, { useRef, useEffect } from "react";

export default function LiveFeed() {
    const videoRef = useRef(null);

    useEffect(() => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        
        const constraints = { video: { facingMode: "environment" } };
  
        navigator.mediaDevices.getUserMedia(constraints)
          .then((stream) => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
          })
          .catch((err) => {
            console.error("error:", err);
          });
      }
    }, []);
  
    return <video style={{width: "100%"}} ref={videoRef} autoPlay muted playsInline/>;
}