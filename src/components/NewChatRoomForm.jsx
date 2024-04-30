// NewChatRoomForm.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const NewChatRoomForm = ({ onRoomCreated }) => {
  const [roomName, setRoomName] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new chat room in Firestore
      const docRef = await addDoc(collection(db, "chatRooms"), {
        name: roomName,
        // Add other properties as needed
      });
      console.log("Chat room created with ID: ", docRef.id);
      // Reset form fields
      setRoomName("");
      // Callback to update list of chat rooms
      onRoomCreated();
    } catch (error) {
      console.error("Error creating chat room: ", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <p className="text-lg mb-5">Room Name:</p>
        <input
          className="text-blue-900"
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="ml-3 px-4 py-2 text-white rounded-lg shadow-md bg-sky-500 hover:bg-green-500 focus:outline-none">Create Chat Room</button>
    </form>
  );
};

export default NewChatRoomForm;
