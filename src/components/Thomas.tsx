import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
    screenHeight: number;
  }

const Thomas : React.FC <Props> =({}) => {
    gsap.registerPlugin(useGSAP,ScrollTrigger);
    useGSAP(
        () => {
            // gsap code here...
            gsap.timeline()
            gsap.from('.thomas-text',{ 
                scrollTrigger: {
                    trigger: '.thomas-container',
                    start: 'center top',
                    markers:  false,
                },
                opacity: 0,
                yPercent:-100,
                duration : 1, 

            } ); 
            gsap.from('.galler-container img',{
                scrollTrigger: {
                    trigger: ".thomas-container",
                    start: "bottom bottom",
                    markers: false
                },
                opacity: 0,
                duration: 2,
                scale: 2,
                ease: "back",
                delay: 0,
            })
        
        },  { }
    );
    return(
        <div className=" h-screen  flex  items-center gap-0 thomas-container"> 
            <img src="images/static/text-thomas.png" alt="Thomas"
                className="relative h-screen  -left-[14%] thomas-text
                    min-[370px]:-left-[13%]
                    min-[390px]:-left-[17%]
                    min-[410px]:-left-[16%]
                    min-[540px]:-left-[13%]
                    md:-left-[17%]
                    min-[912px]:-left-[19%]
                    lg:-left-[19%]
                    xl:-left-[22%]
                "
            />
            <div className="w-1/3 galler-container flex flex-col items-center">
                <img src="images/static/galler1.png" alt="GAller 1" 
                    className="w-[80%]"
                />
                <img src="images/static/galler2.png" alt="GAller 12"
                    className="w-[80%]"
                />
            </div>
            
        </div>
    )
}

export default Thomas;