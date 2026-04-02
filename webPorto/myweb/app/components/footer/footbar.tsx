import Navitem from "../navigation/navItem";
export default function Footbar(){

    return (
        <div>
            
            <div className="box-border sticky bg-foreground inset-x-0 bottom-0 px-5 md:px-15">

                
                <div className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-20 md:gap-20">
                    
                    <div className="text-background">
                        <p>Contact Me</p>
                        <h1 className="text-4xl lg:text-6xl py-5 lg:py-10">Let's start creating together!</h1>
                    </div>
                    
                    
                    <div className="grid grid-cols-2">
        
                        <div className="flex flex-col gap-5 mt-4 md:mt-0 text-lg lg:text-xl text-background">
                             <Navitem href="/">Work</Navitem>
                             <Navitem href="/cobs">About</Navitem>
                             <Navitem href="/">Contact</Navitem>   
                        </div>

                        <div className="flex flex-col gap-5 space-x-6 mt-4 md:mt-0">
                            <a href="#" className="group flex items-center space-x-2 text-background hover:text-muted-foreground transition-colors duration-300">
                                <span className="text-lg lg:text-xl font-medium">Instagram</span>
                            </a>

                            <a href="#" className="group flex items-center space-x-2 text-background hover:text-muted-foreground transition-colors duration-300">
                                <span className="text-lg lg:text-xl font-medium">GitHub</span>
                            </a>

                            <a href="#" className="group flex items-center space-x-2 text-background hover:text-muted-foreground transition-colors duration-300">
                                <span className="text-lg lg:text-xl font-medium">LinkedIn</span>
                            </a>

                            <a href="#" className="group flex items-center space-x-2 text-background hover:text-muted-foreground transition-colors duration-300">
                                <span className="text-lg lg:text-xl font-medium">Twitter</span>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="py-5 mt-5">
                    <p className="text-muted-foreground">2026 designed by frammer and developed with passion by Dikayoda</p>
                </div>

            </div>
        </div>  
    );
}