import Navitem from "../navigation/navItem";

export default function Footbar(){

    return (
        <div className="">
            <div className="h-90 pointer-events-none">

            </div>
            <div className="box-border fixed -z-10 pointer-events-auto inset-x-0 bottom-0 px-5 md:px-15">
 
                <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-20 md:gap-20">
                    
                    <div className="hidden md:flex flex-col">
                        <p className="text-muted-foreground text-sm">2026 developed with passion by Dikayoda</p>
                        <h1 className="text-2xl font-serif py-5">Dikayoda</h1>
                    </div>
                    
                    
                    <div className="grid grid-cols-2 md:justify-items-end">
        
                        <div className="flex flex-col gap-5 mt-4 md:mt-0 text-base">
                             <Navitem href="/work">Work</Navitem>
                             <Navitem href="/about">About</Navitem>
                             <Navitem href="/">Contact</Navitem>   
                        </div>

                        <div className="flex flex-col gap-5 space-x-6 mt-4 md:mt-0">
                            <a href="#" className="group flex items-center space-x-2 hover:text-muted-foreground transition-colors duration-300">
                                <span className="text-base font-medium">Instagram</span>
                            </a>

                            <a href="#" className="group flex items-center space-x-2 hover:text-muted-foreground transition-colors duration-300">
                                <span className="text-base font-medium">GitHub</span>
                            </a>

                            <a href="#" className="group flex items-center space-x-2 hover:text-muted-foreground transition-colors duration-300">
                                <span className="text-base font-medium">LinkedIn</span>
                            </a>

                            <a href="#" className="group flex items-center space-x-2 hover:text-muted-foreground transition-colors duration-300">
                                <span className="text-base font-medium">Twitter</span>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="py-10 md:py-15"></div>

                <div className="md:hidden py-5">
                    <p className="text-muted-foreground text-sm">2026 developed with passion by Dikayoda</p>                   
                </div>
                
            </div>
        </div>  
    );
}