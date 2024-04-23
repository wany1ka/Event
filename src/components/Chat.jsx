import React, { useState, useEffect } from 'react';
import './styles/ChatApp.css';

function Message({ text, sender }) {
  return (
    <div className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
      <p>{text}</p>
    </div>
  );
}

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const simulateResponse = () => {
    setTimeout(() => {
      const response = `Dummy User: Thanks for your message!`;
      setMessages([...messages, { text: response, sender: 'bot' }]);
    }, 1000);
  };

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      simulateResponse(); 
      setInputText('');
    }
  };

  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="input-field"
          style={{color:'#023047'}}
        />
        <button onClick={sendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
}


function ChatApp() {
  return (
    <div className="app-container">
      <h1>Chat Application</h1>
      <Chat />
    </div>
  );
}

export default ChatApp;
