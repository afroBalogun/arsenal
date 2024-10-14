import React from "react";

interface Props {
    screenHeight: number;
  }

const Thomas : React.FC <Props> =({}) => {
    return(
        <div className=" h-screen  flex  items-center gap-0"> 
            <img src="images/text-thomas.png" alt=""
                className="relative h-screen  -left-[14%]
                    min-[370px]:-left-[13%]
                    min-[390px]:-left-[17%]
                    min-[410px]:-left-[16%]
                    min-[540px]:-left-[13%]
                    md:-left-[17%]
                    min-[912px]:-left-[19%]
                    lg:-left-[19%]
                    xl:-left-[23%]
                "
            />
            <div className="w-1/3 galler-container flex flex-col items-center">
                <img src="images/galler1.png" alt="" 
                    className="w-[80%]"
                />
                <img src="images/galler2.png" alt=""
                    className="w-[80%]"
                />
            </div>
            
        </div>
    )
}

export default Thomas;