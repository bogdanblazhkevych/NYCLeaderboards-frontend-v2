import React, { useRef, useEffect } from "react";
import { config } from '../config'

export default function LiveFeed() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        
        const constraints = { video: { facingMode: "environment" } };
  
        navigator.mediaDevices.getUserMedia(constraints)
          .then((stream) => {
            let video = videoRef.current;
            if (video === null) {
              return
            }
            video.srcObject = stream;
            video.play();

            const videoInterval = setInterval(() => {
              const video = videoRef.current
              const canvas = canvasRef.current
              if (canvas === null) {
                return
              }
              const context = canvas.getContext('2d')
              if (video === null || context === null) {
                return
              }
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
              const imageData = canvas.toDataURL('image/jpeg');
              
              fetch(`${config.backendUrl}/imagescan`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: imageData }),
              })
              .then(response => response.json())
              .then(data => {
                console.log(data);
              });
              
            }, 5000)

            return () => {clearInterval(videoInterval)}

          })
          .catch((err) => {
            console.error("error:", err);
          });
      }
    }, []);
  
    return (
      <>
        <video style={{width: "100%"}} ref={videoRef} autoPlay muted playsInline/>
        <canvas ref={canvasRef} style={{ display: 'none' }}/>
      </>
    )
}