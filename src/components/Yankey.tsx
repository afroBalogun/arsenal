import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
    screenHeight: number;
  }

const Yankey : React.FC <Props> = ({screenHeight}) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(
        () => {
            gsap.timeline()
            gsap.from('.yankey',{
                scrollTrigger :{
                    trigger: '.yankey-container',
                    start: "420% top",
                },
                opacity: 0,
                duration: 1,
                delay: .5

            })

            gsap.from('.trailblazer', {
                scrollTrigger: {
                    trigger: '.yankey-container',
                    start: "420% top",
                },
                opacity: 0,
                duration: .5,
                yPercent: -100,
            })

            gsap.from('.yquote, .yankey-text', {
                scrollTrigger: {
                    trigger: '.yankey-container',
                    start: "420% top",
                },
                opacity: 0,
                duration: .5,
                delay: 1,
                yPercent: -100,
            })

            gsap.from('.y-sign', {
                scrollTrigger: {
                    trigger: '.yankey-container',
                    start: "420% top",
                },
                opacity: 0,
                duration: .5,
                delay: 1,
                xPercent: -100,
            })

            gsap.from('.academic', {
                scrollTrigger: {
                    trigger: '.yankey-container',
                    start: "420% top",
                },
                opacity: 0,
                duration: .5,
                delay: 1,
                xPercent: 100,
            })


        })

    return (
        <div className="h-screen yankey-container">
            <img src="images/static/yankey.png" alt="yankey" 
                className="h-full yankey z-10"
            />
            <img src="images/static/trailblazer.png" alt="Trailblazer" 
                className="h-full relative trailblazer"
                style={{ top: `-${screenHeight}px` }}
            />

            <div className="relative text-wrap text-center w-[150px] flex flex-col items-center font-semibold gap-1"
                style={{ top: `-${2*screenHeight}px` }}

            >
                <p
                    className="text-5xl text-red-700 yquote"
                >,,</p>
                <p className="yankey-text"> 
                    Rachel Yankey, your presence was  
                    <span className="text-red-700 text-xl"> enormous </span>
                    symbolized an undoing of sorts.
                </p>
                <p 
                    className="font-dancing text-2xl y-sign"
                >G<span className="text-base">ail</span> L<span className="text-base">ewis</span></p>
                <p
                    className="font-light font-montserrat text-[.6em] uppercase academic"
                >Academic</p>
            </div>
            
            <img src="images/static/unapologetically.png" alt="Unapologetically" 
                className="relative w-40  -left-[50px]"
                style={{ top: `-${1.65 * screenHeight}px` }}

            />
        </div>
    )
}

export default Yankey;