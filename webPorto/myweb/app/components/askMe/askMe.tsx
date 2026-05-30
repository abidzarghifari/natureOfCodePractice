import PhotoProfile from "@/app/about/components/photoProfile";
import { IoIosClose } from "react-icons/io";

export default function AskMe({toggled=false, toggle}){
	
	return (
		<>
			<div className={`fixed top-0 left-0 w-full md:max-w-sm md:top-5 md:left-auto md:right-5 transition-all duration-500 ease-in-out 
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

				{/**content */}
				<div className="h-screen md:h-[60dvh] lg:h-[80dvh] bg-muted p-2 text-foreground md:rounded-b-sm flex flex-col gap-4">
					{/* Chat dari Orang Lain (Kiri) */}
					<div className="flex flex-col items-start gap-1">
						<div className="px-4 py-2.5 bg-background rounded-2xl rounded-tl-none shadow-sm text-sm">
							Hi!
						</div>
						<div className="px-4 py-2.5 bg-background rounded-2xl shadow-sm text-sm">
							I'm Dikayoda. I'm here to help you with any questions you might have about me.
						</div>
						<div className="px-4 py-2.5 bg-background rounded-2xl shadow-sm text-sm">
							How can I help you today?
						</div>
						<span className="text-[10px] text-zinc-400 mt-1 ml-1">10:00 AM</span>
					</div>

					{/* Chat dari Kita (Kanan) */}
					<div className="flex flex-col items-end">
						<div className="px-4 py-2.5 bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-sm text-sm">
						Saya ingin bertanya tentang integrasi tema di aplikasi saya.
						</div>
						<span className="text-[10px] text-zinc-400 mt-1 mr-1">10:01 AM</span>
					</div>

				</div>
			</div>
		</>	
	);
}