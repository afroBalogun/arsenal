import React from "react"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const  Brendon: React.FC = ({}) => {

    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(
        () => {
            gsap.timeline()
            gsap.from('.brendon',{
                opacity: 0,
                duration: 1,
            })

            gsap.from('.rectangle',{
                opacity: 0,
                yPercent: -150,
                duration: .5,
                delay: .5
            })

            gsap.from('.about',{
                opacity: 0,
                yPercent: 150,
                duration: .5,
                delay: .5,
                ease: "back"
            })
        })

    return (
        <div className="h-screen brendon-container">
            <img src="images/static/brendon.png" alt="Brendon Batson" 
                className=" h-[82%]  relative left-[-19%] brendon

                "
            />
            
            <div className="rectangle w-[55%] bg-[#a91111c7] h-[50%] relative top-[-74%] left-[5%] ">
            </div>

            <img src="images/static/brendon-about.png" alt="Brendon-About" 
                className="w-[53.3%] h-[37.8%] relative -top-[77.4%] left-[34.5%] about"
            />
        </div>
        )
}

export default Brendon