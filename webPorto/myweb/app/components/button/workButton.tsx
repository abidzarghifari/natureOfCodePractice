import { GoArrowRight } from "react-icons/go";

export default function WorkButton (){
    return (
        <>
            <button className="group flex flex-row items-center gap-1 bg-foreground text-background text-xl p-2 px-4 rounded-full">
                Our Work <GoArrowRight className="transition-all duration-300 -rotate-45 group-hover:rotate-0" size={20}/>
            </button>
        </>
    );
};