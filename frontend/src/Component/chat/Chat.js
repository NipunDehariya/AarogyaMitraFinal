import { useState } from 'react'
import './Chat.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, Avatar, ConversationHeader } from '@chatscope/chat-ui-kit-react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm AarogyaMitra! How are you feeling Today! 😊",
      sentTime: "just now",
      sender: "AarogyaMitra"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);
    setIsTyping(true);
    const x = await AIResponse(message);
    setMessages([...newMessages, {
      message: x,
      sender: "AarogyaMitra"
    }])
    console.log(x);
    setIsTyping(false);
  };

  async function AIResponse(message) { 
    console.log(message);
    const url = "http://localhost:5000/api/v1/chat/gnew"; 
    const {data} = await axios.post(url, {"message": message});
    const x = await formatString(data.chatResponse);
    return x;
  }

  async function formatString(str) {
    const parts = str.split("**");
    let formattedString = "";
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        formattedString += parts[i];
      } else {
        formattedString += `<strong>${parts[i]}</strong>`;
      }
    }
    return formattedString;
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height: "500px", width: "800px" }}>
        <MainContainer>
          <ChatContainer>   
          <ConversationHeader>
          <Avatar src="newprofile.jpg" name="AarogyaMitra" />
          <ConversationHeader.Content userName="AarogyaMitra" info="Online" />
          <ConversationHeader.Actions>
            {/* <VoiceCallButton />
            <VideoCallButton />
            <InfoButton /> */}
          </ConversationHeader.Actions>          
        </ConversationHeader>    
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="AarogyaMitra is typing" /> : null}
            >
              
             
                {/* return ( */}<br></br>
                  {messages.map((message, i) => {
                    if (message.sender === "user") {
                      return (
                        <Message key={i} model={message}> 
                          <Message.Footer sentTime="just now" />
                        </Message>
                      );
                    } else {
                      return (
                        <Message key={i} model={message}>
                          <Avatar src="newprofile.jpg" name="AarogyaMitra" status='available'/>
                          {/* <Message.Footer sentTime="just now" /> */}
                        </Message>
                      );
                    }
                  })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} attachButton={false} autoFocus/>        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App