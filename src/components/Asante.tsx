import React from "react";

interface Props {
    screenHeight: number;
  }

const Asante : React.FC<Props> = ({screenHeight}) => {
    return(
        <div className="h-screen">
            <img src="images/asante.png" alt="" 
                className="relative h-full left-[20%]"
            />
            <img src="images/asante-text.png" alt="" 
                className="relative h-full"
                style={{ top: `-${screenHeight}px` }}

            />
            <img src="images/carter.png" alt="" 
                className="relative h-full"
                style={{ top: `-${2*screenHeight}px` }}

            />
            <img src="images/philip.png" alt="" 
                className="relative h-full"
                style={{ top: `-${3*screenHeight}px` }}

            />
            <img src="images/sanderson.png" alt="" 
                className="relative h-full"
                style={{ top: `-${4*screenHeight}px` }}

            />
            <img src="images/scott.png" alt="" 
                className="relative h-full"
                style={{ top: `-${5*screenHeight}px` }}

            />
            <img src="images/yankey-text.png" alt="" 
                className="relative h-full"
                style={{ top: `-${6*screenHeight}px` }}

            />

            <p
                className="relative w-[170px] text-wrap font-semibold left-7" 
                style={{ top: `-${6*screenHeight + (34/100*screenHeight)}px` }}  
            ><span
                className="text-red-700 font-extrabold"   
            >&gt; </span>
                100+ APPEARANCES &emsp; FOR ARSENAL
            </p>
        </div>
    )
}

export default Asante;