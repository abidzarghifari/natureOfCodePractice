import Image from "next/image";

export default function PhotoProfile ({imgSrc="https://picsum.photos/id/378/300/300",className=""}){
	return (
		<>
			<div className={`${className} group aspect-20/20 relative flex justify-center bg-gray-200 dark:bg-card rounded-sm overflow-hidden`}>
				<Image
					src={imgSrc}
					alt="Image"
					fill
					className="object-cover transition-transform duration-700 group-hover:scale-110"
				/>
						
				{/**overlay*/}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 group-hover:from-black/30 to-transparent transition-colors duration-700"></div>
				<div className="absolute inset-x-0 bottom-0 h-1/2 backdrop-brightness-50 backdrop-blur-3xl backdrop-grayscale [mask-image:linear-gradient(to_top,black_0%,transparent_80%)]"></div>
				
				
				
			</div>
		</>
	);
};