import { useEffect, useRef } from 'react';
import { IMessage } from '../types/IMessage';

interface MessageListProps {
  messages: IMessage[];
}

export default function MessageList({ messages }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='messages-list'>
      {messages.map((msg, index) => (
        <div key={index} className='message'>
          <div className='message-user'>{msg.userName}</div>
          <div className='message-text'>{msg.message}</div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
