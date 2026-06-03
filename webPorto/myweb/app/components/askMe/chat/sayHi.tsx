"use client"

import { useState } from "react";
import QuestionChat from "./component/questionChatBubble"
import FirstChat from "./component/firstChatBubble"
import { useSequentialRender } from "../../tools/sequentialRender";
import TimeStamp from "./component/timeStamp";
import ChatBubble from "./component/chatBubble";
import ChatType from "./component/chatType";
import AskBackground from "./askBackground";
import AskCollaboration from "./askCollaboration";
import ChatButton from "./component/chatButton";

const chatQueue: ChatType[] = [
    { type: 'question-chat', text: 'Just say Hi' },
    { type: 'question-time'},
	{ type: 'first-chat', text: "oww hello there" },
	{ type: 'bubble', text: "Thanks for saying hi😁" },
	{ type: 'bubble', text: "Hope you enjoy my site" },
	{ type: 'bubble', text: "Is there anything else I can help you with?" },
	{ type: 'answer-time'},
	{ type: 'action-buttons' }
];

export default function SayHi(){
	const [isOpenButton, setIsOpenButton] = useState(true);
	const [isOpenBackground, setIsOpenBackground] = useState(false);
	const [isOpenCollaboration, setIsOpenCollaboration] = useState(false);
	

	const askBackground = () => {setIsOpenBackground(true); setIsOpenButton(false)}; 	
	const askCollaboration = () => {setIsOpenCollaboration(true); setIsOpenButton(false)}; 
	
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
									<ChatButton onClick={askBackground}>Tell me your background?</ChatButton>
									<ChatButton onClick={askCollaboration}>Can we make collaboration?</ChatButton>
								</div>
							) : null;
						}
				})}

			</div>
			{
				isOpenBackground && (
					<>
						<AskBackground></AskBackground>
					</>
				)
			}
			{
				isOpenCollaboration && (
					<>
						<AskCollaboration></AskCollaboration>
					</>
				)
			}
		</>
	)
}