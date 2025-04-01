import { useChat } from './hooks/useChat';
import ChatPage from './pages/ChatPage';
import JoinChatPage from './pages/JoinChatPage';
import './styles.scss';

function App() {
  const {
    connection,
    messages,
    room,
    users,
    joinChat,
    sendMessage,
    closeConnection,
  } = useChat();

  return (
    <>
      {!connection ? (
        <JoinChatPage onJoinChat={joinChat} />
      ) : (
        <ChatPage
          roomName={room}
          messages={messages}
          onSendMessage={sendMessage}
          onCloseConnection={closeConnection}
          users={users}
        />
      )}
    </>
  );
}

export default App;
