import QuestionChat from "./component/questionChatBubble"
import FirstChat from "./component/firstChatBubble"

export default function AskCollaboration(){
	
	return (
		<>
			{/* Chat dari Kita (Kanan) */}
			<div className="flex flex-col items-end gap-1">
				<QuestionChat>can we make collaboration?</QuestionChat>
				<span className="text-[10px] text-zinc-400 mt-1 mr-1">10:01 AM</span>
			</div>
			<div className="flex flex-col items-start gap-1">
				<FirstChat>Yes of course</FirstChat>
				<span className="text-[10px] text-zinc-400 mt-1 ml-1">10:00 AM</span>
			</div>
		</>
	)
}