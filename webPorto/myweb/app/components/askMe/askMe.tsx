import PhotoProfile from "@/app/about/components/photoProfile";
import { IoIosClose } from "react-icons/io";
import WelcomeChat from "./chat/welcomeChat";

export default function AskMe({toggled=false, toggle}){

	return (
		<>
			<div className={`fixed top-0 left-0 h-screen md:h-[60dvh] lg:h-[80dvh] flex flex-col w-full md:max-w-sm md:top-5 md:left-auto md:right-5 transition-all duration-500 ease-in-out 
				shadow-xl rounded-md ${toggled ? "translate-y-0 opacity-100 z-50" : "translate-y-full -z-50 opacity-0"}`}>
				
				{/**head*/}
				<div className="flex justify-between p-3 bg-foreground text-background md:rounded-t-sm">
					<div className="flex items-center gap-4">
						<div className="rounded-full overflow-hidden aspect-square h-10">
							<PhotoProfile imgSrc="/ProfilePicture.webp"></PhotoProfile>
						</div>
						<div className="flex-col">
							<p className="font-serif text-base">Dikayoda Bot</p>
							<p className="text-sm">Ask me question</p>
						</div>
					</div>
					
					<button onClick={toggle} className="rounded-sm hover:bg-muted-foreground">
						<IoIosClose size={40}/>
					</button>
				</div>

				{
					toggled && (
						<>
							{/**content */}
							<div className="flex-auto bg-muted p-2 text-foreground md:rounded-b-sm flex flex-col gap-4 overflow-y-scroll">
								<WelcomeChat></WelcomeChat>
							</div>
						</>
					)
				}

			</div>
		</>	
	);
}
