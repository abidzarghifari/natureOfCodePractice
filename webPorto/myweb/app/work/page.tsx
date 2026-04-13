import Done from "./components/done";
import Inprogress from "./components/inprogress";
import AboutButton from "../components/button/aboutButton";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbFileCv } from "react-icons/tb";
import Coba from "../components/coba";
export default function Page(){

    return (
        <>
            <div className="py-15 md:py-20 pb-30 flex flex-col gap-20 md:gap-30 lg:gap-50 ">
                <div>
                    <Done></Done>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-5">
                    <div className="flex-1 text-xl">
                        Our Story
                    </div>
                    <div className="flex-1 md:flex-3 text-2xl lg:text-4xl max-w-5/6 md:max-w-full">
                        Explore our journey and learn what sets us apart in <span className="text-muted-foreground">crafting impactful digital experiences.</span>
                    </div>
                    <div className="flex-1">
                        <AboutButton></AboutButton>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-50 ">
                    <FaGithub size={70}/>
                    <FaCodepen size={70} />
                    <SiLeetcode size={70}/>
                    <AiOutlineLinkedin size={70} />
                    <FiInstagram size={70}/>
                    <TbFileCv size={70} />
                </div>
            </div>
            
        </>
    );
}   


<div className="text-center  md:max-w-4/5 lg:max-w-2/3 pt-10  ">
                            <p className="text-xs md:text-lg 2xl:text-2xl text-muted-foreground">I'm Passionate about translating technical excellence into immersive digital experiences. I don't just build websites; I craft the art of engineering on a digital canvas.</p>
                        </div>