"use client"

import Navitem from "./navItem"
import { useState } from "react";
import { useEffect } from "react";
import ThemeSwitcher from "../theme/themeSwitcher";
import NavitemButton from "./navitembutton";
import AskMe from "../askMe/askMe";

export default function Navlist({isOpenMenu=false}){

        const navLinks = [
            { name: 'Work', href: '/work' },
            { name: 'About', href: '/about' },
            
        ];
        
        const [isVisible, setIsVisible] = useState(false);
        const [isHidden, setIsHidden] = useState(true);
        const [isScrolled, setIsScrolled] = useState(false);
        const [lastScrollY, setLastScrollY] = useState(0);


        useEffect(() => {
            const controlNavbar = () => {

            if (window.scrollY < 200 || window.scrollY > lastScrollY && window.scrollY > 50) { 
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
    
        
        const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <>
            <div className="fixed left-1/2 -translate-x-1/2 z-50">
                <div className="relative">
                    <div className={`absolute left-1/2 -translate-x-1/2 -top-30 z-50 px-8 py-4 rounded-full transition-all duration-500 ${
                        isVisible ?
                        "translate-y-30 md:translate-y-25"
                        : "translate-y-0"
                        } ${isScrolled ? "bg-background/20 backdrop-blur-xl backdrop-grayscale"
                        :
                        ""}`} 
                        >

                        <li className="flex justify-between gap-10 text-base">
                            {navLinks.map((item, index) => (
                                <ul key={index}>
                                    <Navitem href={item.href}>
                                        {item.name}
                                    </Navitem>
                                </ul>                    
                            ))}
                            <ul>
                                <NavitemButton toggle={ () =>setIsOpenDialog((prev)=>!prev)}>
                                   AskMe 
                                </NavitemButton>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
            
            <div className={`fixed top-0 left-0 z-30 w-full p-5 pt-20 bg-background shadow-md rounded-b-3xl grid transition-all duration-500 ease-in-out dark:border-muted dark:border-b-1 ${
                    isOpenMenu 
                    ? "grid-rows-[1fr] opacity-100" 
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className="overflow-hidden">
                    <li className="grid justify-items-center gap-5 text-base">
                        {navLinks.map((item, index) => (
                            <ul key={index}>
                                <Navitem href={item.href}>
                                    {item.name}
                                </Navitem>
                            </ul>                    
                        ))}
                        <ul>
                                <NavitemButton toggle={() => setIsOpenDialog((prev)=>!prev) }>
                                   AskMe 
                                </NavitemButton>
                        </ul>
                        <ul>
                            <ThemeSwitcher></ThemeSwitcher>
                        </ul>
                    </li>
                </div>    
                
            </div>
            
            <div>
                <AskMe toggled={isOpenDialog} toggle={() =>setIsOpenDialog(false)}></AskMe>
            </div>
            
        </>
    )
}

/**
             
 */
