"use client"

import { useState } from "react";
import QuestionChat from "./component/questionChatBubble"
import FirstChat from "./component/firstChatBubble"
import { useSequentialRender } from "../../tools/sequentialRender";
import TimeStamp from "./component/timeStamp";
import ChatBubble from "./component/chatBubble";
import ChatType from "./component/chatType";
import ChatButton from "./component/chatButton";

const chatQueue: ChatType[] = [
    { type: 'question-chat', text: 'Can we make collaboration?' },
    { type: 'question-time'},
	{ type: 'first-chat', text: "thats great broww" },
	{ type: 'bubble', text: "Send me a message and lets chat further!" },
	{ type: 'answer-time'},
	{ type: 'action-buttons' }
];

export default function AskCollaboration(){

	const [isOpenButton, setIsOpenButton] = useState(true);
	
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

						if (item.type === 'action-buttons') {
							// Fungsi state dipanggil dengan aman di sini saat mapping UI
							return isOpenButton ? (
								<div key={index} className="flex flex-col gap-2 animate-in fade-in duration-300">
									<ChatButton >Send Message</ChatButton>
									<ChatButton >ask something else</ChatButton>
								</div>
							) : null;
						}
				})}

			</div>
		</>
	)
}