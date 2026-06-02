import PhotoProfile from "./components/photoProfile";
import BorderLine from "../components/line/borderline";
import ShowCase from "./components/showCase";
import SlideDownAnimation from "../components/tools/slideDownAnimation";

export default function Page(){

    return (
        <>
            <div className="py-15 md:py-20 md:pb-30 flex flex-col gap-20 md:gap-20">

                {//title==============
                }
                <div className="grid grid-cols-1 md:grid-cols-2 py-5">
                    <div className="hidden md:flex">
                        <SlideDownAnimation duration={200}>
                            <p className="">About.</p>
                        </SlideDownAnimation>
                    </div>
                    
                    
                    <div className="grid grid-cols-1 gap-10">
                        <SlideDownAnimation duration={200}>
                            <div className="rounded-full overflow-hidden aspect-square h-40 shadow-lg">
                                <PhotoProfile imgSrc="/ProfilePicture.webp"></PhotoProfile>
                            </div>
                        </SlideDownAnimation>
                        
                        <div>
                            <SlideDownAnimation duration={300}>
                                <h3 className="text-lg font-serif">I`m Dikayoda. Progamming Enthusiast.</h3>
                            </SlideDownAnimation>
                            <SlideDownAnimation duration={500}>
                                <p  className="text-base text-muted-foreground text-justify">Passionate about translating technical excellence into immersive digital experience. Crafting the art of engineering on a digital canvas always be my goal.</p>
                            </SlideDownAnimation>
                        </div>
                    </div>
                </div>

                {//About
                }
                <div className="grid grid-cols-1 ">
                    <SlideDownAnimation duration={200}>
                        <BorderLine></BorderLine>
                    </SlideDownAnimation>
                </div>            


                {//persuasif naration
                }
                <SlideDownAnimation duration={500}>
                    <div className="grid grid-cols-1 gap-5 justify-items-center">
                        <p className="text-base md:text-lg max-w-2xl text-justify">For me, code isn't just instructions, it's also a space for experimentation, a playground that always triggers dopamine.</p>
                        <p className="text-base text-muted-foreground text-justify max-w-2xl">However, the best projects are never born in a vacuum. Technology advances too rapidly to be explored in isolation. There are always boundaries that can be broken when two—or more—heads come together, share wild ideas, and combine diverse skills. So I invite you to collaborate and let you know how I build this art.</p>
                    </div>
                </SlideDownAnimation>
                
                <SlideDownAnimation duration={500}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center bg-muted p-15 rounded-md">
                        <div>
                            <h4 className="text-lg text-muted-foreground">01</h4>
                            <h4 className="text-lg text-muted-foreground">Imagine</h4>
                            <p className="text-justify">I do not just think-I imagine. Knowledge gives us the tools, but imagination gives us the direction. if you can envision it, just a gentle spark of momentum you can make it. After all, as Einstein put it: "Imagination is more important than knowledge."</p>
                        </div>
                        <div>
                            <h4 className="text-lg text-muted-foreground">02</h4>
                            <h4 className="text-lg text-muted-foreground">Designing</h4>
                            <p className="text-justify">To build without design is to journey without a map. For me, design is the soul of creation. It is the quiet force that clarifies the chaos, defines the vision, and ensures that every single brick we lay has a purpose.</p>
                        </div>
                        <div>
                            <h4 className="text-lg text-muted-foreground">03</h4>
                            <h4 className="text-lg text-muted-foreground">Define Tools</h4>
                            <p className="text-justify">The right tools don’t just build the vision; they protect it. Choosing our technical toolkit early isn’t about checking boxes—it’s about setting the rules of engagement. When the tools are intentional, the execution is effortless, ensuring that what we build today is strong enough to stand tomorrow.</p>
                        </div>
                        <div>
                            <h4 className="text-lg text-muted-foreground">04</h4>
                            <h4 className="text-lg text-muted-foreground">Keep Playing</h4>
                            <p className="text-justify">Rules build structures, but play builds wonders. We stay curious, we test boundaries, and we treat every canvas like a playground. Because the moment you stop playing is the moment you stop innovating.</p>
                        </div>
                    </div>
                </SlideDownAnimation>
                

                <div className="grid grid-cols-1 gap-5 justify-items-center">
                    <p className="text-base text-muted-foreground text-justify max-w-2xl">as far as the journey goes, I discovered the art of perspective. It trained my mind to hold two truths at once: the beauty of the grand design, and the precision of the single thread. Because true problem-solving isn't just about finding an answer—it's about knowing how to gracefully zoom from the horizon to the grain of sand.</p>
                </div>

                {//showcase
                }
                <ShowCase></ShowCase>

            </div>

        </>
    );
}   
