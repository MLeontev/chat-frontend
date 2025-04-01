import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { useState } from 'react';
import { IMessage } from '../types/IMessage';

export function useChat() {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState<string[]>([]);

  const joinChat = async (userName: string, roomName: string) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl('http://localhost:5132/chat')
        .build();

      connection.on('ReceiveMessage', (userName: string, message: string) => {
        setMessages((messages) => [...messages, { userName, message }]);
      });

      connection.on('ReceiveUsers', (users: string[]) => {
        setUsers(users);
      });

      connection.onclose(() => {
        setConnection(null);
        setMessages([]);
        setRoom('');
        setUsers([]);
      });

      await connection.start();
      await connection.invoke('JoinRoom', { userName, roomName });

      setConnection(connection);
      setRoom(roomName);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (message: string) => {
    try {
      connection?.invoke('SendMessage', message);
    } catch (error) {
      console.log(error);
    }
  };

  const closeConnection = async () => {
    try {
      await connection?.stop();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    connection,
    messages,
    room,
    users,
    joinChat,
    sendMessage,
    closeConnection,
  };
}
