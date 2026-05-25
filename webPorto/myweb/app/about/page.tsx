import PhotoProfile from "./components/photoProfile";
import BorderLine from "../components/line/borderline";

export default function Page(){

    return (
        <>
            <div className="py-15 md:py-20 pb-30 flex flex-col gap-10 md:gap-20">

                {//title==============
                }
                <div className="grid grid-cols-1 md:grid-cols-2 py-5">
                    <div className="hidden md:flex">
                        <p className="">About.</p>   
                    </div>
                    
                    
                    <div className="grid grid-cols-1 gap-10">
                        <div className="rounded-full overflow-hidden aspect-square h-40">
                            <PhotoProfile imgSrc="/ProfilePicture.webp"></PhotoProfile>
                        </div>
                        <div>
                            <h3 className="text-lg">I`m Dikayoda. Progamming Enthusiast.</h3>
                            <p  className="text-base text-muted-foreground text-justify">Passionate about translating technical excellence into immersive digital experience. Crafting the art of engineering on a digital canvas always be my goal.</p>
                        </div>
                    </div>
                </div>

                {//About
                }
                <div className="grid grid-cols-1 ">
                    <BorderLine></BorderLine>
                </div>            


                {//persuasif naration
                }
                <div className="grid grid-cols-1 gap-5 justify-items-center">
                    <p className="text-lg text-justify max-w-2xl">For me, code isn't just instructions, it's also a space for experimentation, a play space that always triggers dopamine.</p>
                    <p className="text-base text-muted-foreground text-justify max-w-2xl">However, the best projects are never born in a vacuum. Technology advances too rapidly to be explored in isolation. There are always boundaries that can be broken when two—or more—heads come together, share wild ideas, and combine diverse skills. So I invite you to collaborate and let you know how I build this art.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center bg-muted p-15 rounded-md">
                    <div>
                        <h4 className="text-lg text-muted-foreground">01</h4>
                        <h4 className="text-lg text-muted-foreground">amet</h4>
                        <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nobis, quam consequuntur quaerat est provident deleniti corrupti qui nesciunt rem ratione autem quae illo debitis quisquam repudiandae optio voluptatem? Sunt.</p>
                    </div>
                    <div>
                        <h4 className="text-lg text-muted-foreground">02</h4>
                        <h4 className="text-lg text-muted-foreground">ipsum</h4>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto ea vitae fugiat architecto velit maiores earum perspiciatis aliquam aspernatur veniam dolorem eveniet voluptate beatae, explicabo voluptatibus ducimus eaque exercitationem?</p>
                    </div>
                    <div>
                        <h4 className="text-lg text-muted-foreground">03</h4>
                        <h4 className="text-lg text-muted-foreground">labore</h4>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore dolor dolorum saepe earum tempora ullam omnis illum magnam, sapiente ipsa officiis ea totam doloremque vel et obcaecati hic exercitationem.</p>
                    </div>
                    <div>
                        <h4 className="text-lg text-muted-foreground">04</h4>
                        <h4 className="text-lg text-muted-foreground">dolor</h4>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ratione provident perspiciatis, voluptas aspernatur quos non cumque est explicabo quam debitis consequuntur accusantium officia vitae laudantium! Unde sequi a harum.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 justify-items-center">
                    <p className="text-base text-muted-foreground text-justify max-w-2xl">However, the best projects are never born in a vacuum. Technology advances too rapidly to be explored in isolation. There are always boundaries that can be broken when two—or more—heads come together, share wild ideas, and combine diverse skills. So I invite you to collaborate and let you know how I build this art.</p>
                </div>

                {//showcase
                }
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:h-[80dvh] md:max-h-[250px] lg:max-h-[500px]">
                    <div className="bg-muted md:col-span-3 overflow-hidden rounded-sm">
                        <PhotoProfile imgSrc="https://picsum.photos/id/275/300/300" ></PhotoProfile>
                    </div>
                    <div className="bg-muted md:col-span-2 overflow-hidden rounded-sm">
                        <PhotoProfile imgSrc="https://picsum.photos/id/456/300/300" className="md:aspect-20/30"></PhotoProfile>
                    </div>                   
                </div>

            </div>

        </>
    );
}   

/**
 * 
                     
 */