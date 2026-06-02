import SlideUpAnimation from "@/app/components/tools/slideUpAnimation";

export default function FirstChat({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

	return(
		<>
			<SlideUpAnimation>
				<div className="px-4 py-2.5 bg-background rounded-2xl rounded-tl-none shadow-sm text-sm">
					{children}
				</div>
			</SlideUpAnimation>
		</>
	);
}