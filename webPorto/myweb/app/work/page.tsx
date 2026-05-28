import Done from "./components/done";
import AboutButton from "../components/button/aboutButton";


export default function Page(){

    return (
        <>
            <div className="py-15 md:py-20 md:pb-30 flex flex-col gap-20">

                <div className="text-center overflow-hidden">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-widest">WORK.</h3>
                </div>

                <div>
                    <Done></Done>
                </div>                
                
                <div className="pt-10 flex flex-col lg:flex-row gap-6 lg:gap-5">
                    <div className="flex-1 text-base">
                        my story
                    </div>
                    <div className="flex-1 lg:flex-3 text-base">
                        Explore my journey and learn what sets us apart in <span className="text-muted-foreground">crafting impactful digital experiences.</span>
                    </div>
                    <div className="flex-1 flex items-start lg:justify-end">
                        <AboutButton></AboutButton>
                    </div>
                </div>
                
            </div>
            
        </>
    );
}   

/**
*/