import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
    screenHeight: number;
  }

const Saka : React.FC <Props> =({screenHeight}) => { 
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(
        () => {
            gsap.timeline()
            gsap.from('.b',{
                scrollTrigger :{
                    trigger: '.saka-container',
                    start: "850% top",
                },
                opacity: 0,
                duration: 1,
                yPercent: -100,
                ease: "back"
            })
            gsap.from('.red2',{
                scrollTrigger :{
                    trigger: '.saka-container',
                    start: "850% top",
                },
                opacity: 0,
                duration: 1,
                yPercent: 100,
                ease: 'back'
            })
        })
    return(
        <div className="h-screen saka-container">
            <img src="images/saka.png" alt="" 
                className="h-full "
            />
            <img src="images/b.png" alt="" 
                className="h-screen relative b"
                style={{ top: `-${screenHeight}px` }}
            />

            <img src="images/2.png" alt="" 
                className="h-screen relative red2"
                style={{ top: `-${2 * screenHeight}px` }}
            />
        </div>
    )
}

export default Saka;
