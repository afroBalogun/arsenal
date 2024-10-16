import React from "react";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(
        () => {
            gsap.timeline()
            gsap.from(' .vavavoom', {
                scrollTrigger: {
                    trigger: '.henry-container',
                    start: "700% top",
                },
                opacity: 0,
                duration: 1,
                scale: .8,
                ease: 'bounce'
            })

            gsap.from(' .henry-text', {
                scrollTrigger: {
                    trigger: '.henry-container',
                    start: "700% top",
                },
                opacity: 0,
                duration: .5,
                delay: .5,
                yPercent: -100,
            })

            gsap.from('.h-sign', {
                scrollTrigger: {
                    trigger: '.henry-container',
                    start: "700% top",
                },
                opacity: 0,
                duration: .5,
                delay: .5,
                xPercent: -100,
            })

            gsap.from('.audio-producer', {
                scrollTrigger: {
                    trigger: '.henry-container',
                    start: "700% top",
                },
                opacity: 0,
                duration: .5,
                delay: .5,
                xPercent: 100,
            })
        })

    return(
        <div className="h-screen flex flex-col items-center henry-container">
            <div 
                ref={textRef}
                className="henry-text w-[320px] text-wrap text-center font-semibold">
                <p
                    className="henry-text"
                >Thierry was black pride. <br />
                    Football Perfection. He could, and did, do anything he wanted with a football.
                </p>
                <p 
                    className="font-dancing text-2xl font-medium h-sign"
                >T<span className="text-base">ayo</span> P<span className="text-base">apoola</span></p>
                <p
                    className="font-light font-montserrat text-[.6em] uppercase audio-producer"
                >Audio Producer</p>
            </div>
            <img src="images/thierry.png" alt="Thierry Henry" 
                className="relative h-full henry"
                style={{ top: `-${textHeight}px` }}

            />
            <img src="images/vavavoom.png" alt="VAVAVOOM" 
                className="relative h-full vavavoom"
                style={{ top: `-${screenHeight + textHeight}px` }}
            />
        </div>
    )
}

export default Henry;