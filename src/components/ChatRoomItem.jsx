// ChatRoomItem.js
import React from "react";
import { Link } from "react-router-dom";

const ChatRoomItem = ({ room }) => {
  return (
    <li>
      {/* Use Link component to navigate to the chat room page */}
      <Link to={`/chat/${room.id}`}>
        <button>{room.name}</button>
      </Link>
    </li>
  );
};

export default ChatRoomItem;
