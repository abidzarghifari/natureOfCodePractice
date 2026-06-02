"use client"

import { useState } from "react";
import ChatType from "./component/chatType";
import FirstChat from "./component/firstChatBubble";
import AddressChat from "./askAddress";
import ChatBubble from "./component/chatBubble";
import ChatButton from "./component/chatButton";
import AskCollaboration from "./askCollaboration";
import { useSequentialRender } from "../../tools/sequentialRender";
import TimeStamp from "./component/timeStamp";

const chatQueue: ChatType[] = [
    { type: 'first-chat', text: 'Hi!' },
    { type: 'bubble', text: "I'm Dikayoda. I'm here to help you..." },
    { type: 'bubble', text: 'How can I help you today?' },
	{ type: 'answer-time'},
	{ type: 'action-buttons' }
];

export default function WelcomeChat(){
	
	const [isOpenButton, setIsOpenButton] = useState(true);
	const [isOpenAddress, setIsOpenAddress] = useState(false);
	const [isOpenCollaboration, setIsOpenCollaboration] = useState(false);
	const askAddress = () => {setIsOpenAddress(true); setIsOpenButton(false)}; 	
	const askCollaboration = () => {setIsOpenCollaboration(true); setIsOpenButton(false)}; 
	
	const visibleMessages = useSequentialRender(chatQueue,700);

	return (
		<>
			<div className="flex flex-col items-start gap-1">

				{visibleMessages.map((item, index) => {
					if (item.type === 'first-chat') {
						return <FirstChat key={index}>{item.text}</FirstChat>;
					}
					
					if (item.type === 'bubble') {
						return <ChatBubble key={index}>{item.text}</ChatBubble>;
					}

					if (item.type === 'answer-time') {
						return <TimeStamp key={index}></TimeStamp>;
					}
					
					if (item.type === 'action-buttons') {
					// Fungsi state dipanggil dengan aman di sini saat mapping UI
					return isOpenButton ? (
						<div key={index} className="flex flex-col gap-2 animate-in fade-in duration-300">
							<ChatButton onClick={askAddress}>Where are you from?</ChatButton>
							<ChatButton onClick={askCollaboration}>Can we make collaboration?</ChatButton>
						</div>
					) : null;
					}

					return null;
				})}

			</div>

			{
				isOpenAddress && (
					<>
						<AddressChat></AddressChat>
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
	);
}

/**
 * 
 */