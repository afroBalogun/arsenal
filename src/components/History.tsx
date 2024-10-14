import React from "react";

interface Props {
    screenHeight: number;
  }

const History : React.FC <Props> = ({screenHeight}) => {

    
    return(
        <div className="w-full h-screen flex flex-col items-center">       
            <img src="images/team.png" alt="" 
                className="h-screen"
            />
             <img
                  src="images/history-made.png"
                  alt=""
                  className="h-screen relative"
                  style={{ top: `-${screenHeight}px` }}
                />

             <img src="images/stars.png" alt="" 
                 className="h-screen relative"
                 style={{ top: `-${2 * screenHeight}px` }}
            />
        </div>
    )
}

export default History;