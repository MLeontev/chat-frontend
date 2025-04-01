import { useState } from 'react';
import ConfirmModal from './ConfirmModal';

interface ChatHeaderProps {
  roomName: string;
  onCloseConnection: () => void;
}

export default function ChatHeader({
  roomName,
  onCloseConnection,
}: ChatHeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='chat-header'>
      <h2>Чат: {roomName}</h2>
      <button className='btn btn-danger' onClick={() => setIsModalOpen(true)}>
        Покинуть чат
      </button>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={onCloseConnection}
        message='Вы уверены, что хотите покинуть чат?'
      />
    </div>
  );
}
