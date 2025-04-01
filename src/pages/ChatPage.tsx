import ChatHeader from '../components/ChatHeader';
import ConnectedUsers from '../components/ConnectedUsers';
import MessageList from '../components/MessageList';
import SendMessageForm from '../components/SendMessageForm';

interface ChatPageProps {
  roomName: string;
  messages: { userName: string; message: string }[];
  users: string[];
  onSendMessage: (message: string) => void;
  onCloseConnection: () => void;
}

export default function ChatPage({
  roomName,
  messages,
  users,
  onSendMessage,
  onCloseConnection,
}: ChatPageProps) {
  return (
    <div className='chat-page'>
      <ConnectedUsers users={users} />
      <div className='chat'>
        <ChatHeader roomName={roomName} onCloseConnection={onCloseConnection} />
        <MessageList messages={messages} />
        <SendMessageForm onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}
