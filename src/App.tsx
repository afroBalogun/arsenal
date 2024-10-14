import React from "react"
import { useEffect, useState, useRef } from "react"
import Brendon from "./components/Brendon.tsx"
import PaulDavis from "./components/PaulDavis.tsx"
import Thomas from "./components/Thomas.tsx"
import David from "./components/David.tsx"
import Wright from "./components/Wright.tsx"
import Yankey from "./components/Yankey.tsx"
import History from "./components/History.tsx"
import Henry from "./components/Henry.tsx"
import Asante from "./components/Asante.tsx"
import Saka from "./components/Saka.tsx"
import "./style.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function App(){
  const containerRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".app",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });


    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
          setScreenHeight(window.innerHeight);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
    
    return(
        <div
          ref ={containerRef}
            className="app w-full h-screen flex bg-white overflow-x-hidden whitespace-nowrap overflow-y-hidden"
        >

            <div className="min-w-[50%] flex-shrink-0 slide">
              <Brendon  />
            </div>

            <div className="min-w-[50%] flex-shrink-0 slide">
              <PaulDavis />
            </div>

            <div className="min-w-[0%] flex-shrink-0 slide">
              <Thomas screenHeight = {screenHeight}/>
            </div>

            <div className="min-w-[38%] flex-shrink-0 slide">
              <David />
            </div>

            <div className="min-w-[20%] flex-shrink-0 slide">
              <Wright screenHeight = {screenHeight}/>
            </div>

            <div className="min-w-[20%] flex-shrink-0 slide">
              <Yankey screenHeight = {screenHeight}/>
            </div>    

            <div className="min-w-[50%] flex-shrink-0  slide">
              <History screenHeight = {screenHeight}/>
            </div>     

            <div className="min-w-[20%] flex-shrink-0 slide">
              <Henry screenHeight = {screenHeight}/>
            </div>

            <div className="min-w-[40%] flex-shrink-0  slide">
              <Asante screenHeight = {screenHeight}/>
            </div>   

            <div className="min-w-[20%] flex-shrink-0 slide ">
              <Saka screenHeight = {screenHeight}/>
            </div>       
        </div>
    )
    
}