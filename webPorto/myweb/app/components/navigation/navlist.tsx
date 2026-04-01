"use client"

import Navitem from "./navItem"
import { useState } from "react";
import { useEffect } from "react";
import ThemeSwitcher from "../theme/themeSwitcher";

export default function Navlist({isOpenMenu=false}){

        
        const navLinks = [
            { name: 'Work', href: '/' },
            { name: 'About', href: '/cobs' },
            { name: 'Contact', href: '' },
        ];
        
        const [isVisible, setIsVisible] = useState(true);
        const [isScrolled, setIsScrolled] = useState(false);
        const [lastScrollY, setLastScrollY] = useState(0);

        useEffect(() => {
            const controlNavbar = () => {
        
            if (window.scrollY > lastScrollY && window.scrollY > 50) { 
                setIsVisible(false); 
            } else { 
                setIsVisible(true); 
            }
            
            if(window.scrollY > 100 && isVisible){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        
            setLastScrollY(window.scrollY);
            };

            window.addEventListener('scroll', controlNavbar);

        
            return () => {
            window.removeEventListener('scroll', controlNavbar);
            };
        }, [lastScrollY]);
    
    
    return (
        <>
            <div className={`hidden md:flex fixed left-1/2 -translate-x-1/2 z-50 px-8 py-4 top-5 rounded-full transition-all duration-500 ${
                isVisible ?
                "translate-y-0"
                : "-translate-y-[220%]"
                } ${isScrolled ? "bg-foreground/20 backdrop-blur-xl backdrop-grayscale"
                 :
                 ""}`} 
                >

                <li className="flex justify-between gap-10 text-xl">
                    {navLinks.map((item, index) => (
                        <ul key={index}>
                            <Navitem href={item.href}>
                                {item.name}
                            </Navitem>
                        </ul>                    
                    ))}
                </li>
            </div>
            
            <div className={`md:hidden fixed top-0 left-0 z-30 w-full p-5 pt-20 bg-background rounded-b-3xl grid transition-all duration-500 ease-in-out ${
                    isOpenMenu 
                    ? "grid-rows-[1fr] opacity-100" 
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className="overflow-hidden">
                    <li className="grid justify-items-center gap-5 text-xl">
                        {navLinks.map((item, index) => (
                            <ul key={index}>
                                <Navitem href={item.href}>
                                    {item.name}
                                </Navitem>
                            </ul>                    
                        ))}
                        <ul>
                            <ThemeSwitcher></ThemeSwitcher>
                        </ul>
                    </li>
                </div>    
                
            </div>
            
        </>
    )
}