import SlideUpAnimation from "@/app/components/tools/slideUpAnimation";

export default function ChatBubble({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

	return(
		<>
			<SlideUpAnimation>
				<div className="px-4 py-2.5 bg-background rounded-2xl shadow-sm text-sm">
					{children}
				</div>
			</SlideUpAnimation>		
		</>
	);
}