import React from "react";

interface Props {
    screenHeight: number;
  }

const Wright : React.FC <Props> =({screenHeight}) => {    
    return (
        <div className="h-screen">
            <img src="images/wright.png" alt="" 
                className="h-full"
            />
            <img src="images/pure-vibes.png" alt="" 
                className="h-screen relative"
                style={{ top: `-${screenHeight}px` }}
            />
        </div>
    )
}

export default Wright;