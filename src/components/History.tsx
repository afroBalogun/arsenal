import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
interface Props {
    screenHeight: number;
  }

const History : React.FC <Props> = ({screenHeight}) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(
        () => {
            gsap.timeline()
            gsap.from('.team',{
                scrollTrigger :{
                    trigger: '.history',
                    start: "550% top",
                },
                opacity: 0,
                duration: 1,
                stagger: 0.5
            })
            gsap.from('.stars', {
                scrollTrigger :{
                    trigger: '.history',
                    start: "550% top",
                },
                duration: .5,
                delay: 1,
                scale: .8,
                ease: 'back'
            })
   
        })

    
    return(
        <div className="w-full h-screen flex flex-col items-center history">       
            <img src="images/team.png" alt="Team" 
                className="h-screen team"
            />
             <img
                  src="images/history-made.png"
                  alt="History-made"
                  className="h-screen relative made team"
                  style={{ top: `-${screenHeight}px` }}
                />

             <img src="images/stars.png" alt="Stars" 
                 className="h-screen relative stars team"
                 style={{ top: `-${2 * screenHeight}px` }}
            />
        </div>
    )
}

export default History;