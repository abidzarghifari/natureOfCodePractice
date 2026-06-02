"use client"

import { useState, useEffect } from "react";

export default function SlideUpAnimation({
  duration=300,children,
}: Readonly<{
  children: React.ReactNode;
}>){
    const [isOpen, setIsOpen] = useState(false); 
    
    useEffect(() => {
        // requestAnimationFrame memastikan browser sempat me-render state awal 
        // sebelum beralih ke state animasi masuk
        const animFrame = requestAnimationFrame(() => {
            setIsOpen(true);
        });
        
        return () => cancelAnimationFrame(animFrame);
    }, []);
    
    return (
        <div className={`transition-all duration-[${duration}ms] ease-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
            {children}
        </div>      
    );
}