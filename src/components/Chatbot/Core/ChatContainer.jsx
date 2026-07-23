import { useState } from "react";
import { useEffect, useRef } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { sendMessage } from "../../../services/chatApi.js";


function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async (text) => {
    setMessages((prev) => [...prev, { role: "user", text }]);

    try {
      setTyping(true);
      const reply = await sendMessage(text);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setTyping(false);
    } catch (error) {
      console.error(error);
    }
  };


    return (
  <div className="h-full flex flex-col">

    {/* Header */}
    <div className="flex items-center gap-3  px-5 py-4 bg-gray-100  shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)] ">
      <img
        src="https://i.pinimg.com/736x/bc/90/62/bc90629151268d3d08dad6ded6879114.jpg"
        alt="Leo"
        className="w-12 h-12 rounded-full"
      />

      <div>
        <h2 className="text-lg md:text-2xl font-bold text-orange-500">
          Leo
        </h2>

        <p className="text-xs text-blue-600">
          Supratim's Personal Assistant
        </p>

        {typing && (
          <p className="text-xs text-green-700 font-medium animate-pulse">
            Typing...
          </p>
        )}
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto bg-white px-4 py-5 space-y-4">
      {messages.map((msg, index) => (
        <Message
          key={index}
          role={msg.role}
          text={msg.text}
        />
      ))}

      <div ref={messagesEndRef} />
    </div>

    {/* Input */}
    <div className="border-t bg-white p-3 shrink-0">
      <ChatInput onSend={handleSend} />
    </div>

  </div>
);

}

export default ChatContainer;
