import QuestionChat from "./component/questionChatBubble"
import FirstChat from "./component/firstChatBubble"
import { useSequentialRender } from "../../tools/sequentialRender";
import TimeStamp from "./component/timeStamp";
import ChatBubble from "./component/chatBubble";
import ChatType from "./component/chatType";

const chatQueue: ChatType[] = [
    { type: 'question-chat', text: 'Just say Hi' },
    { type: 'question-time'},
	{ type: 'first-chat', text: "oww hello there" },
	{ type: 'bubble', text: "Thanks for saying hi😁" },
	{ type: 'bubble', text: "Hope you enjoy my site" },
	{ type: 'bubble', text: "Is there anything else I can help you with?" },
	{ type: 'answer-time'},
];

export default function SayHi(){
	
	
	const visibleMessages = useSequentialRender(chatQueue,800);
	
	return (
		<>

			{/* Chat dari Kita (Kanan) */}
			<div className="flex flex-col gap-1">
			
				{visibleMessages.map((item, index) => {	
						if (item.type === 'question-chat') {
							return <div key={index} className="self-end">
										<QuestionChat >{item.text}</QuestionChat>
									</div>;
						}
						if (item.type === 'question-time') {
							return <div key={index} className="self-end">
										<TimeStamp ></TimeStamp>
									</div>;
						}
						if (item.type === 'first-chat') {
							return <div key={index} className="self-start">
										<FirstChat >{item.text}</FirstChat>
									</div>;
						}
						if (item.type === 'bubble') {
							return <div key={index} className="self-start">
										<ChatBubble>{item.text}</ChatBubble>
									</div>;
						}
						if (item.type === 'answer-time') {
							return <div key={index} className="self-start">
										<TimeStamp ></TimeStamp>
									</div>;
						}
				})}

			</div>
		</>
	)
}