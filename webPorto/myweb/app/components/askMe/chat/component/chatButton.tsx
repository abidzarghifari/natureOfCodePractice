import SlideUpAnimation from "@/app/components/tools/slideUpAnimation";

export default function ChatButton({
  onClick,children,
}: Readonly<{
  children: React.ReactNode;
}>){

	return(
		<>
			<SlideUpAnimation>
				<button  onClick={onClick} className="text-sm border border-muted-foreground px-4 py-2.5 rounded-full hover:bg-muted-foreground hover:text-background transition-all duration-200">{children}</button>
			</SlideUpAnimation>
		</>
	);
}