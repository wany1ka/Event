// ChatRoom.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, orderBy, onSnapshot, where, limit } from "firebase/firestore";
import { db } from "./firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import "./styles/ChatApp.css"; // Import CSS file for styling

const ChatRoom = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(
          collection(db, "messages"),
          where("roomId", "==", roomId),
          orderBy("createdAt", "asc"), // Change to ascending order to display messages from oldest to newest
          limit(50)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const fetchedMessages = [];
          querySnapshot.forEach((doc) => {
            fetchedMessages.push({ id: doc.id, ...doc.data() });
          });
          setMessages(fetchedMessages);
        });
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching messages: ", error);
      }
    };

    fetchMessages();
  }, [roomId]);

  return (
    <div className="chat-room-container m-5">
      <header className="chat-room-header">
        <h2 className="font-bold text-blue-700 text-center text-xl">Chat Room {roomId}</h2>
      </header>
      <div className="message-container mt-10 ml-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <SendMessage roomId={roomId} />
    </div>
  );
};

export default ChatRoom;
