import Image from "next/image";
import Link from "next/link";

export default function Workitem ({projectName="Booking Corp",projectType="FINTECH",imgSrc="https://picsum.photos/seed/picsum/500/300?grayscale",href="/about"}){
    return (
        <>
            <div className="flex flex-col gap-5 overflow-x-hidden">
                <Link href={href} >
                    <div className="group aspect-square relative flex justify-center bg-gray-200 dark:bg-card rounded-sm overflow-hidden shadow-black/20 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                        <Image
                            src={imgSrc}
                            alt="Image"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/**overlay*/}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 group-hover:from-black via-black/20 to-transparent transition-colors duration-700"></div>

                        <div className="absolute bottom-10 left-10  text-background dark:text-foreground lg:text-transparent lg:dark:text-transparent group-hover:text-background group-hover:dark:text-foreground transition-all duration-400">
                            <h3 className=" text-sm lg:text-sm">{projectName}</h3>
                            <h3 className="text-lg lg:text-xl">{projectType}</h3>
                        </div>
                    </div>
                </Link>                
            </div>
        </>
    );
};

/**
 * 
 */