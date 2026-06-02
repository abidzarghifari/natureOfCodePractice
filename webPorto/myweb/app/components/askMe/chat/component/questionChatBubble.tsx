import SlideUpAnimation from "@/app/components/tools/slideUpAnimation";

export default function QuestionChat({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

	return(
		<>
			<SlideUpAnimation>
				<div className="px-4 py-2.5 bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-sm text-sm">
						{children}
				</div>
			</SlideUpAnimation>
		</>
	);
}