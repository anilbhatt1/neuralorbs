/*
- Functionality to Add the accel data by calling adddata which will access api
*/

import React, { useEffect, useState, useRef } from 'react';
import { adddata} from '../../ApiService';;

export default function AccelAdd({username}) {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const isAndroid = /Android/.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isNone = !isAndroid && !isiOS;
  const previousTime = useRef(null);

  const handlePermissionRequest = () => {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then((response) => {
          if (response === 'granted') {
            window.addEventListener('devicemotion', handleMotionEvent);
          }
        })
        .catch((error) => {
          console.error('Error requesting accelerometer permission:', error);
        });
    }
  };

  const handleStartRequest = () => {
      window.addEventListener('devicemotion', handleMotionEvent);    
  };

  const handleMotionEvent = (event) => {
    const { x, y, z } = event.accelerationIncludingGravity;
    const currentTime = new Date();
    const timeGap = (currentTime - previousTime.current) / 1000; // Convert to seconds
    if (timeGap >= 5) {
      previousTime.current = currentTime;
      setAcceleration({ x, y, z });    
      adddata(x, y, z, username)
        .then(response => 
            console.log(response)        
        )
        .catch(error => 
            console.error('Error requesting accelerometer permission:', error)
        );      
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  }, []);

  return (
    <div>
        <h1>Accelerometer Data Add - {username} - {Date.now()}</h1>
        <p>X: {acceleration.x}</p>
        <p>Y: {acceleration.y}</p>
        <p>Z: {acceleration.z}</p>
        <p>isFunc : {typeof DeviceMotionEvent.requestPermission === 'function' ? "Yes" : "No"}</p>
        <p>isAndroid : {isAndroid ? "Yes" : "No"}</p>
        <p>isiOS : {isiOS ? "Yes" : "No"}</p>
        <p>isNone : {isNone ? "Yes" : "No"}</p>
       {isAndroid && <button onClick={handleStartRequest}>Android - Start</button>}              
       {isiOS && <button onClick={handlePermissionRequest}>iOS - Permission & Start</button>}
       {isNone && <button onClick={handleStartRequest}>Non Android & non iOS - Start</button>}
    </div>
  );
};


