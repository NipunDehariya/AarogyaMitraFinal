import React, { useState } from 'react';
import './Chatbot.css';

// Define the initial dataset
const dataset = [
  {
    input: 'hi' ,input: 'hello',
    output: 'Hello! How can I help you today?'
  },
  
  
  {
    input: 'thank you',
    output: 'You\'re welcome!'
  },
  {
    input: 'bye',
    output: 'Goodbye! Have a great day!'
  }
  
];

dataset.push({
  input: "help me",
  output: " 19983"
})
dataset.push({
  input: "can i canncel my appointment",
  output: "what is your appointment ID"
})

dataset.push({
  input: "how do I reset my password?",
  output: "To reset your password, go to the login page and click Forgot Password"
})
dataset.push({
  input: "I want to canncel my appointment",
  output: "please call the technical Support 19500 "
})


dataset.push({
  input: "كيفيه الغاء الحجز",
  output: "اتصل بنا علي هذا الرقم 19500"
})


const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const input = event.target.message.value;
    const output = generateResponse(input);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: output, isBot: true }
    ]);
    event.target.reset();
  };

  const generateResponse = (input) => {
    const normalizedInput = input.trim().toLowerCase();
    for (let i = 0; i < dataset.length; i++) {
      const data = dataset[i];
      if (normalizedInput === data.input) {
        return data.output;
      }
    }
    return 'Sorry, I don\'t understand. Please try asking a different question.';
  };

  return (
    <div className="support-chat">
      {/* chat icon */}
      <div
        className="chat-icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-comments"></i>
      </div>

      {/* chat window */}
      {isOpen && (
        <div className="chat-window">
          <div className="header">
            <h2>Support Chat</h2>
            <div
              className="close-icon"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isBot ? 'bot' : 'user'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleMessageSubmit}>
            <div className="container">
              <input type="text" name="message" placeholder="Type your message here" />
              <button type="submit" className= 'btn btn-info'>Send</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SupportChat;
