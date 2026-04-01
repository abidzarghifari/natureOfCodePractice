"use client"

import ThemeSwitcher from "../theme/themeSwitcher"
import { useState } from "react"
import { useEffect } from "react"
import Navlist from "./navlist"
import { Turn as Hamburger } from 'hamburger-react'

export default function Navbar(){

        const [isVisible, setIsVisible] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
         const [isOpenMenu,setOpenMenu] = useState(false);

        useEffect(() => {
            const controlNavbar = () => {

            if (window.scrollY < lastScrollY && window.scrollY < 50) { 
                setIsVisible(true); 
            }else { 
                setIsVisible(false); 
            }
            
            if(!isVisible){
                setOpenMenu(false);
            }
        
            setLastScrollY(window.scrollY);
            };

            window.addEventListener('scroll', controlNavbar);

        
            return () => {
            window.removeEventListener('scroll', controlNavbar);
            };
        }, [lastScrollY]);
       

    return (
        <div>
                      
                <div className={`fixed h-15 top-5 w-full px-5 md:px-20 top-0 left-1/2 -translate-x-1/2 z-40     transition-transform duration-500 flex justify-center align-middle 
                    ${isVisible ? 
                    "translate-y-0" : 
                    "-translate-y-[220%]"}`}
                    >
                    <div className="flex w-full max-w-8xl justify-between items-center">
                        <h1 className="text-3xl font-serif font-medium ">dikayoda</h1> 
                        
                        <div className="hidden md:flex justify-center align-middle">
                            <ThemeSwitcher></ThemeSwitcher>
                        </div>
                        <div className="flex md:hidden justify-center align-middle">
                            <Hamburger size={25} direction="right" toggled={isOpenMenu} toggle={setOpenMenu}></Hamburger>
                        </div>
                    </div>  
                </div>
                <div className="">
                    <Navlist isOpenMenu={isOpenMenu}></Navlist>
                </div>
            
        </div>
        
    )
}