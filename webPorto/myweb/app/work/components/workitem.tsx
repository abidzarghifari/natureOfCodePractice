import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function Workitem ({client="Booking Corp",projectType="Fintech Dello Banking App"}){
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="relative flex justify-center bg-gray-200 dark:bg-card rounded-3xl">

                    <div className="flex p-10 hover:scale-110 transform-all duration-300">
                        <Image className="" src="https://picsum.photos/seed/picsum/500/300?grayscale" alt="Picture of the author"  width={500} height={500}/>
                    </div>
                            
                    <div className="absolute hidden lg:flex bottom-8 hover:bottom-5 left-6 transition-all duration-300 -rotate-45 hover:rotate-0 inset-shadow-sm bg-muted text-background hover:text-foreground w-min rounded-full px-4 py-1 hover:p-4 hover:rounded-full">
                        <GoArrowRight size={30}/>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl text-muted-foreground">{client}</h3>
                    <h3 className="text-2xl">{projectType}</h3>
                </div>
            </div>
        </>
    );
};

/**
 * 
 * 
 */