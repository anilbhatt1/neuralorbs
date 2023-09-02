import React, { useState } from 'react';
import Accel from './Accel';

const IotApps = ({username}) => {

    const [showAccel, setShowAccel] = useState(false);
  
    const handleAccelRequest = () => {
        setShowAccel(true);
    }; 

    return (
        <div>
            <h1>IOT-Apps</h1>
            <p>Logged in as : {username}</p>
            <button onClick={handleAccelRequest}>Accelero App</button>    
 
            {showAccel && <Accel username={username}/>}            
        </div>
    );
};

export default IotApps;
