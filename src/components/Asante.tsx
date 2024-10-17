import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
    screenHeight: number;
  }

const Asante : React.FC<Props> = ({screenHeight}) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(
        () => {
            gsap.timeline()
            gsap.from('.asante',{
                scrollTrigger :{
                    trigger: '.asante-container',
                    start: "750% top",
                },
                opacity: 0,
                duration: 1,
                delay: 1.5,
                scale: 1.2,
                ease: 'back'
            })

            gsap.from('.appearances',{
                scrollTrigger :{
                    trigger: '.asante-container',
                    start: "750% top",
                },
                opacity: 0,
                duration: 1,
                delay: 1.5
            })

            gsap.from('.neg',{
                scrollTrigger :{
                    trigger: '.asante-container',
                    start: "750% top",                },
                opacity: 0,
                duration: .25,
                xPercent: -50,
                stagger: .5
            })

            gsap.from('.pos',{
                scrollTrigger :{
                    trigger: '.asante-container',
                    start: "750% top",
                },
                opacity: 0,
                duration: .25,
                xPercent: 50,
                delay: .25,
                stagger: .5
            })
        })
    return(
        <div className="h-screen asante-container">
            <img src="images/static/asante.png" alt="Asante" 
                className="relative h-full left-[20%] asante"
            />
            <img src="images/static/asante-text.png" alt="Asante-text" 
                className="relative h-full neg"
                style={{ top: `-${screenHeight}px` }}

            />
            <img src="images/static/carter.png" alt="Carter" 
                className="relative h-full pos"
                style={{ top: `-${2*screenHeight}px` }}

            />
            <img src="images/static/philip.png" alt="Philip" 
                className="relative h-full neg"
                style={{ top: `-${3*screenHeight}px` }}

            />
            <img src="images/static/sanderson.png" alt="Sanderson" 
                className="relative h-full pos"
                style={{ top: `-${4*screenHeight}px` }}

            />
            <img src="images/static/scott.png" alt="Scott" 
                className="relative h-full neg"
                style={{ top: `-${5*screenHeight}px` }}

            />
            <img src="images/static/yankey-text.png" alt="Yankey-text" 
                className="relative h-full pos"
                style={{ top: `-${6*screenHeight}px` }}

            />

            <p
                className="relative w-[170px] text-wrap font-semibold left-7 appearances" 
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