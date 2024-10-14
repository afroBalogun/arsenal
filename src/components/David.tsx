import React from "react";
import { useEffect, useState, useRef } from "react";

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

    return (
        <div className="h-screen w-full">
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
                    <img src="images/oak-estate.png" alt="" 
                    className="w-40"/>
                </div>
            </article>
            <img src="images/david.png" alt="" 
                className="relative  h-full"
                style={{ top: `-${articleHeight}px` }}

            />
        </div>
    )
}

export default David;