import React from "react";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const David : React.FC = ({}) => {
    const [articleHeight, setArticleHeight] = useState(0); 
    const articleRef = useRef<HTMLDivElement>(null); 
    useEffect(() => {
      
        const updateArticleHeight = () => {
            if (articleRef.current) {
                const height = articleRef.current.getBoundingClientRect().height;
                setArticleHeight(height);
            }
        };
        
        updateArticleHeight(); 
        window.addEventListener('resize', updateArticleHeight); 
        
        return () => window.removeEventListener('resize', updateArticleHeight);
    }, []);

    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(
        () => {
            gsap.timeline()
            gsap.from('.david',{
                scrollTrigger :{
                    trigger: '.david-container',
                    start: "200% top",
                    markers: false,
                },
                opacity: 0,
                duration: 1,
            })

            gsap.from('.article-text', {
                scrollTrigger: {
                    trigger: ".david-container",
                    start: '200% top' ,
                    markers: false,

                },
                duration: .5,
                delay: 1,
                opacity: 0,
                yPercent: -100
            })

            gsap.from('.oak', {
                scrollTrigger: {
                    trigger: ".david-container",
                    start: '200% top' 
                },
                duration: .5,
                delay: 1,
                opacity: 0,
                xPercent: -100,
                ease: 'back'
            })
        }
    )

    return (
        <div className="h-screen w-full david-container">
            <article ref={articleRef}>
                <div className="article-text flex flex-col text-wrap font-semibold gap-2 ml-20">
                    <span
                        className="text-5xl text-red-700"
                    >,,</span>
                    <p 
                        className="w-[200px]  "
                    >
                       
                        When David went to Arsenal as a kid,
                        everyone on the Honor Oak Estate began supporting Arsenal,
                        as a way of supporting him.
                    </p>
                    <p 
                    className="font-dancing text-2xl "
                >I<span className="text-base">an</span> W<span className="text-base">right</span></p>
                </div>
                <div className="article-img">
                    <img src="static/images/oak-estate.png" alt="Oak Estate" 
                    className="w-40 oak"/>
                </div>
            </article>
            <img src="static/images/david.png" alt="David" 
                className="relative  h-full david"
                style={{ top: `-${articleHeight}px` }}

            />
        </div>
    )
}

export default David;