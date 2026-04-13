"use client"

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Navbar from './components/navigation/navbar';
import Footbar from './components/footer/footbar';

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,     // Mengatur durasi scroll (semakin besar semakin lambat)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi pelambatan
      smoothWheel: true, // Mengaktifkan scroll halus untuk mouse wheel
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div>
        <div className="p-5 md:px-20 md:py-10 bg-background">
                      
            <div className="">
              
                <div className="h-12">
                    <Navbar></Navbar>
                </div>
                        
                <div>
                    {children}
                </div>
                        
            </div>

        </div>
        
        <Footbar></Footbar>
    </div>
  )
}