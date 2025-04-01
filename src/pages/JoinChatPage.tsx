import { useState } from 'react';

interface JoinChatPageProps {
  onJoinChat: (userName: string, roomName: string) => void;
}

export default function JoinChatPage({ onJoinChat }: JoinChatPageProps) {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onJoinChat(userName, roomName);
  };

  return (
    <form className='join-chat-form' onSubmit={handleSubmit}>
      <h2>Добро пожаловать</h2>
      <input
        type='text'
        placeholder='Введите ваше имя'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
        maxLength={20}
      />
      <input
        type='text'
        placeholder='Введите название чата'
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        required
        maxLength={30}
      />
      <button
        className='btn btn-primary'
        type='submit'
        disabled={!userName.trim() || !roomName.trim()}
      >
        Присоединиться к чату
      </button>
    </form>
  );
}
