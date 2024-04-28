// SendMessage.js
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import './styles/ChatApp.css'

const SendMessage = ({ roomId }) => {
  const [message, setMessage] = useState("");

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    try {
      if (message.trim() === "") return; // Don't send empty messages
      await addDoc(collection(db, "messages"), {
        text: message,
        roomId: roomId,
        createdAt: serverTimestamp(),
        // Add other message properties as needed
      });
      setMessage(""); // Clear the message input after sending
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <form onSubmit={handleMessageSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
