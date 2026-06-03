"use client"

import { useState } from "react";
import QuestionChat from "./component/questionChatBubble"
import FirstChat from "./component/firstChatBubble"
import { useSequentialRender } from "../../tools/sequentialRender";
import TimeStamp from "./component/timeStamp";
import ChatBubble from "./component/chatBubble";
import ChatType from "./component/chatType";
import ChatButton from "./component/chatButton";
import AskCollaboration from "./askCollaboration";
import SayHi from "./sayHi";

const chatQueue: ChatType[] = [
    { type: 'question-chat', text: 'Tell me your background??' },
    { type: 'question-time'},
	{ type: 'first-chat', text: "I was born in a small town in Central Java, specifically in Temanggung." },
	{ type: 'bubble', text: "I went to school in Wonosobo and a student at the University of Science Al-Qur'an." },
	{ type: 'bubble', text: "Is there anything else I can help you with?" },
	{ type: 'answer-time'},
	{ type: 'action-buttons' }
];

export default function AskBackground(){
	
	const [isOpenButton, setIsOpenButton] = useState(true);
	const [isOpenCollaboration, setIsOpenCollaboration] = useState(false);
	const [isOpenSayHi, setIsOpenSayHi] = useState(false);

	const askCollaboration = () => {setIsOpenCollaboration(true); setIsOpenButton(false)}; 
	const askSayHi = () => {setIsOpenSayHi(true); setIsOpenButton(false)};

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
									<ChatButton onClick={askCollaboration}>Want to make collaboration</ChatButton>
									<ChatButton onClick={askSayHi}>Just say Hi</ChatButton>
								</div>
							) : null;
						}
				})}
				{
					isOpenCollaboration && (
						<>
							<AskCollaboration></AskCollaboration>
						</>
					)
				}
				{
					isOpenSayHi && (
						<>
							<SayHi></SayHi>
						</>
					)
				}
			</div>
		</>
	)
}