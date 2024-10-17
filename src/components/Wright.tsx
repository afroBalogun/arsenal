import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
    screenHeight: number;
  }

const Wright : React.FC <Props> =({screenHeight}) => {    
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(
        () => {
            gsap.timeline()
            gsap.from('.wright',{
                scrollTrigger :{
                    trigger: '.wright-container',
                    start: "300% top",
                },
                opacity: 0,
                yPercent: 100,
                duration: 1,
            })

            gsap.from('.vibes', {
                scrollTrigger: {
                    trigger: '.wright-container',
                    start: "300% top",
                },
                opacity: 0,
                duration: .5,
                delay: 1
            })


        })

    return (
        <div className="h-screen wright-container">
            <img src="static/images/wright.png" alt="Ian Wright" 
                className="h-full wright"
            />
            <img src="static/images/pure-vibes.png" alt="Pure-Vibes" 
                className="h-screen relative vibes"
                style={{ top: `-${screenHeight}px` }}
            />
        </div>
    )
}

export default Wright;