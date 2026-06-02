import SlideUpAnimation from "@/app/components/tools/slideUpAnimation";
export default function TimeStamp(){
	
	const currentTime = new Date().toLocaleTimeString('id-ID', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true // Ubah ke true jika ingin format AM/PM
	});

	return(
		<>
			<span key={4} className="text-[10px] text-zinc-400 mt-1 ml-1">{currentTime}</span>
		</>
	);
	
}