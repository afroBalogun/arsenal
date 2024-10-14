import React from "react";

interface Props {
    screenHeight: number;
  }

const Saka : React.FC <Props> =({screenHeight}) => { 
    return(
        <div className="h-screen">
            <img src="images/saka.png" alt="" 
                className="h-full"
            />
            <img src="images/b.png" alt="" 
                className="h-screen relative"
                style={{ top: `-${screenHeight}px` }}
            />

            <img src="images/2.png" alt="" 
                className="h-screen relative"
                style={{ top: `-${2 * screenHeight}px` }}
            />
        </div>
    )
}

export default Saka;
