import React from "react";
import { Link } from "react-router-dom";

const ChatRoomItem = ({ room }) => {
  return (
    <li>
      {/* Use Link component to navigate to the chat room page */}
      <Link to={`/chat/${room.id}`}>
        <button className="text-green-500 hover:text-blue-500 text-lg font-semibold my-2">{room.name}</button>
      </Link>
    </li>
  );
};

export default ChatRoomItem;
