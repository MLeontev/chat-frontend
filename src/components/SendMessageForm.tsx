import React, { useState } from 'react';

interface SendMessageFormProps {
  onSendMessage: (message: string) => void;
}

export default function SendMessageForm({
  onSendMessage,
}: SendMessageFormProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='send-message-form'>
      <input
        type='text'
        placeholder='Напишите сообщение...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className='btn btn-primary'
        type='submit'
        disabled={!message.trim()}
      >
        Отправить
      </button>
    </form>
  );
}
