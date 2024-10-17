import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const PaulDavis : React.FC =({}) => {

    const Pauldavis = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(useGSAP,ScrollTrigger);
    useGSAP(
        () => {
            // gsap code here...
            gsap.timeline()
            gsap.from('.paul-davis',{ 
                scrollTrigger: {
                    trigger: '.paul',
                    start: 'top top',
                    markers:  false,
                },
                opacity: 0,
                duration : 1, 
                delay: 0 
            } ); // <-- automatically reverted
        
        },  { }
    );

    return(
        <div className="w-full paul" ref = {Pauldavis}>
            <img src="images/static/paul-davis.png" alt="Paul Davis"
                className="h-screen paul-davis"
            />
        </div>
    )
}

export default PaulDavis;