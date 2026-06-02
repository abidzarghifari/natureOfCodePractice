import Workitem from "./workitem";
import SlideDownAnimation from "@/app/components/tools/slideDownAnimation";

export default function Done (){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2 flex justify-end text:base lg:text-lg px-2">
                        <SlideDownAnimation duration={300}>
                            <p>on Progress</p>
                        </SlideDownAnimation>
                    </div>
                    <div>
                        <SlideDownAnimation duration={500}>
                            <Workitem projectName="Self Taqrar" projectType="SPIRITUAL" imgSrc="https://picsum.photos/id/165/300/300"></Workitem>
                        </SlideDownAnimation>
                        
                    </div>
                    <div>
                        <SlideDownAnimation duration={500}>
                            <Workitem projectName="Azzahra Cabin House" projectType="ACOMODATION" imgSrc="https://picsum.photos/id/177/300/300"></Workitem>
                        </SlideDownAnimation>
                    </div>
                    <div>
                        <SlideDownAnimation duration={500}>
                            <Workitem projectName="Code Pen" projectType="PLAYGROUND" imgSrc="https://picsum.photos/id/89/300/300"></Workitem>
                        </SlideDownAnimation>
                    </div>
                    <div>
                        <SlideDownAnimation duration={500}>
                            <Workitem projectName="Daily Dose" projectType="ARTICLES" imgSrc="https://picsum.photos/id/421/300/300"></Workitem>
                        </SlideDownAnimation>
                    </div>
            </div> 
        </>
    );
};