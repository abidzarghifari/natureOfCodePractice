type ChatType = 
  | { type: 'first-chat'; text: string}
  |	{ type: 'question-chat'; text: string}
  | { type: 'bubble'; text: string}
  | { type: 'action-buttons'} 
  | { type: 'question-time'}
  | { type: 'answer-time'};

export default ChatType;