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

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Simulate loading delay
    setTimeout(() => setLoading(false), 2000); // Adjust as needed

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    if (!loading) {
      const sections = gsap.utils.toArray<HTMLDivElement>(".slide");
      const container = containerRef.current;
  
      if (container) {
        // Delay to ensure that all images or dynamic content are fully loaded
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
        }, 2000); 
      }
    }
  }, [loading]);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="static/images/football.gif" alt="Loading..." className="" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="app w-full h-screen flex bg-white whitespace-nowrap overflow-x-hidden overflow-y-hidden"
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

      <div className="min-w-[40%] flex-shrink-0 slide">
        <Saka screenHeight={screenHeight} />
      </div>
    </div>
  );
}
