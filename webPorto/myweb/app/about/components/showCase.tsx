"use client"

import PhotoProfile from "./photoProfile"
import { useState,useEffect } from "react";

export default function ShowCase (){
	const photoUrlArr = ["https://picsum.photos/id/275/300/300",
						"https://picsum.photos/id/456/300/300",
						"https://picsum.photos/id/925/300/300",
						"https://picsum.photos/id/555/300/300",
						"https://picsum.photos/id/765/300/300",
						"https://picsum.photos/id/453/300/300",
						"https://picsum.photos/id/345/300/300"];

	const photoUrlArrSize = photoUrlArr.length;
	const [photoUrl0,setPhotoUrl0] = useState(0);
	const [photoUrl1,setPhotoUrl1] = useState(1);
	
	useEffect(()=>{
		const interval10 = setTimeout(()=>{
			
			setPhotoUrl0((prev) => (prev+2) % photoUrlArrSize);
			setPhotoUrl1((prev) => (prev+2) % photoUrlArrSize);

		},7000);

		return () => {
			clearTimeout(interval10);
		}
	},[photoUrl1]);
	
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:h-[80dvh] md:max-h-[250px] lg:max-h-[500px]">
				<div className="bg-muted md:col-span-3 overflow-hidden rounded-sm shadow-lg">
					<PhotoProfile imgSrc={photoUrlArr[photoUrl0]}></PhotoProfile>
				</div>
				<div className="bg-muted md:col-span-2 overflow-hidden rounded-sm shadow-lg">
					<PhotoProfile imgSrc={photoUrlArr[photoUrl1]} className="md:aspect-20/30"></PhotoProfile>
				</div>
            </div>
		</>
	)
}