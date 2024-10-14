import React from "react";

interface Props {
    screenHeight: number;
  }

const Yankey : React.FC <Props> = ({screenHeight}) => {
    return (
        <div className="h-screen">
            <img src="images/yankey.png" alt="" 
                className="h-full"
            />
            <img src="images/trailblazer.png" alt="" 
                className="h-full relative"
                style={{ top: `-${screenHeight}px` }}
            />
            <div className="relative text-wrap text-center w-[150px] flex flex-col items-center font-semibold gap-1"
                style={{ top: `-${2*screenHeight}px` }}

            >
                <p
                    className="text-5xl text-red-700"
                >,,</p>
                <p>
                    Rachel Yankey, your presence was  
                    <span className="text-red-700 text-xl"> enormous </span>
                    symbolized an undoing of sorts.
                </p>
                <p 
                    className="font-dancing text-2xl "
                >G<span className="text-base">ail</span> L<span className="text-base">ewis</span></p>
                <p
                    className="font-light font-montserrat text-[.6em] uppercase"
                >Academic</p>
            </div>
            
            <img src="images/unapologetically.png" alt="" 
                className="relative w-40 -top-[415px] -left-[50px]"
            />
        </div>
    )
}

export default Yankey;