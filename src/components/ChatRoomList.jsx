// ChatRoomList.js
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import ChatRoomItem from "./ChatRoomItem";
import NewChatRoomForm from "./NewChatRoomForm";

const ChatRoomList = () => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    fetchChatRooms();
  }, []);

  const fetchChatRooms = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "chatRooms"));
      const rooms = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChatRooms(rooms);
    } catch (error) {
      console.error("Error fetching chat rooms: ", error);
    }
  };

  const handleRoomCreated = () => {
    // Update list of chat rooms after a new room is created
    fetchChatRooms();
  };

  return (
    <div>
      <h2>Chat Rooms</h2>
      {/* Display the form for creating new chat rooms */}
      <NewChatRoomForm onRoomCreated={handleRoomCreated} />
      <ul>
        {/* Render existing chat rooms */}
        {chatRooms.map((room) => (
          <ChatRoomItem key={room.id} room={room} />
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomList;
