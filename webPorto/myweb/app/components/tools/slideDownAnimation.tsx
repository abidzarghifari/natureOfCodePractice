"use client"

import { useState, useEffect } from "react";

export default function SlideDownAnimation({
  duration,children,
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
		<div style={{ transitionDuration: `${duration}ms` }} className={`transition-all ease-in-out transform ${
			isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
		}`}>
			{children}
		</div>      
	);
}