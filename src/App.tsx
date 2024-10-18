import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Brendon from "./components/Brendon.tsx";
import PaulDavis from "./components/PaulDavis.tsx";
import Thomas from "./components/Thomas.tsx";
import David from "./components/David.tsx";
import Wright from "./components/Wright.tsx";
import Yankey from "./components/Yankey.tsx";
import History from "./components/History.tsx";
import Henry from "./components/Henry.tsx";
import Asante from "./components/Asante.tsx";
import Saka from "./components/Saka.tsx";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


export default function App() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef<HTMLDivElement>(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    //  loading delay
    setTimeout(() => setLoading(false), 4000); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP( () => {
    gsap.timeline()
    gsap.from('.arsenal', {
      opacity: 0,
      xPercent: -100,
      duration: .5,
    })

    gsap.from('.bhm', {
      opacity: 0,
      duration: 1,
      delay: .5
    })
    gsap.to('.letter', {
      opacity: 0,
      duration: .5,
      delay: 1,
      stagger: .2
    })
    gsap.to('.bhm', {
      fontWeight: 600,
      duration: .2,
      delay: 3,
      ease: 'power1'
    })

  })

  useLayoutEffect(() => {
    if (!loading) {
      const sections = gsap.utils.toArray<HTMLDivElement>(".slide");
      const container = containerRef.current;
  
      if (container) {
        // Delay 
        setTimeout(() => {
          const totalWidth = sections.reduce((acc, section) => {
            return acc + section.getBoundingClientRect().width;
          }, 0);
  
          gsap.to(sections, {
            x: -totalWidth + window.innerWidth,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 1,
              end: `+=${totalWidth}`,
              snap: 1 / (sections.length - 1),
            },
          });
        }, 3000); 
      }
    }
  }, [loading]);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="font-montserrat flex items-center" >
          <img src="static/images/arsenal-canon.png" alt="" 
            className="min-[350px]:w-[150px] lg:w-60 2xl:w-80"
          />

          <div className="-mt-6 overflow-hidden wrapper
            max-[500px]:-mt-3 2xl:-mt-10
          ">
              <h2 className="arsenal text-2xl  font-bold 
                max-[500px]:text-base 2xl:text-4xl
              ">
                <span className="letter relative">A</span>
                <span className="letter relative">R</span>
                <span className="letter relative">S</span>
                <span className="letter relative">E</span>
                <span className="letter relative">N</span>
                <span className="letter relative">A</span>
                <span className="letter relative">L</span>
                &nbsp;
              </h2>
              <h3 className="bhm text-xl flex gap-2
                max-[500px]:text-xs 2xl:text-3xl
              ">
                BLACK HISTORY M<span>            
                <img src="static/images/football.gif" alt="Loading..." className="-ml-1 max-[500px]:w-5 max-[500px]:-ml-[5px]" />
                </span>
                <span className="-ml-2 max-[500px]:-ml-[12px]">NTH</span>
                
              </h3>            

          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="app w-full h-screen flex bg-white whitespace-nowrap overflow-hidden"
    >
      <div className="min-w-[50%] flex-shrink-0 slide">
        <Brendon />
      </div>

      <div className="min-w-[50%] flex-shrink-0 slide">
        <PaulDavis />
      </div>

      <div className="min-w-[10%] flex-shrink-0 slide">
        <Thomas screenHeight={screenHeight} />
      </div>

      <div className="min-w-[40%] flex-shrink-0 slide">
        <David />
      </div>

      <div className="min-w-[20%] flex-shrink-0 slide">
        <Wright screenHeight={screenHeight} />
      </div>

      <div className="min-w-[20%] flex-shrink-0 slide">
        <Yankey screenHeight={screenHeight} />
      </div>

      <div className="min-w-[50%] flex-shrink-0 slide">
        <History screenHeight={screenHeight} />
      </div>

      <div className="min-w-[20%] flex-shrink-0 slide">
        <Henry screenHeight={screenHeight} />
      </div>

      <div className="min-w-[40%] flex-shrink-0 slide">
        <Asante screenHeight={screenHeight} />
      </div>

      <div className="min-w-[30%] flex-shrink-0 slide">
        <Saka screenHeight={screenHeight} />
      </div>
    </div>
  );
}
