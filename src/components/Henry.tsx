import React from "react";
import { useEffect, useState, useRef } from "react";

interface Props {
    screenHeight: number;
  }

const Henry : React.FC <Props> = ({screenHeight}) => {

    const [textHeight, setTextHeight] = useState(0); 
    const textRef = useRef<HTMLDivElement>(null); 
    useEffect(() => {
      
      if (textRef.current) {
        const height = textRef.current.getBoundingClientRect().height;
        setTextHeight(height);
      }
    }, []);

    return(
        <div className="h-screen flex flex-col items-center">
            <div 
                ref={textRef}
                className="henry-text w-[320px] text-wrap text-center font-semibold">
                <p>Thierry was black pride. <br />
                    Football Perfection. He could, and did, do anything he wanted with a football.
                </p>
                <p 
                    className="font-dancing text-2xl font-medium"
                >T<span className="text-base">ayo</span> P<span className="text-base">apoola</span></p>
                <p
                    className="font-light font-montserrat text-[.6em] uppercase"
                >Audio Producer</p>
            </div>
            <img src="images/thierry.png" alt="Thierry Henry" 
                className="relative h-full "
                style={{ top: `-${textHeight}px` }}

            />
            <img src="images/vavavoom.png" alt="VAVAVOOM" 
                className="relative h-full"
                style={{ top: `-${screenHeight + textHeight}px` }}
            />
        </div>
    )
}

export default Henry;