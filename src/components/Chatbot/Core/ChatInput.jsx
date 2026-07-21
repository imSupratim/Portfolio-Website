import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message.trim());
    setMessage("");
  };

  const handleKeyDown = (e) => {
    // Enter -> Send
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-3 rounded-2xl border border-gray-300 bg-white p-3 shadow-sm transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200"
    >
      <textarea
        rows={1}
        placeholder="Message Leo..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="max-h-40 flex-1 resize-none overflow-y-auto bg-transparent px-2 py-2 text-gray-800 placeholder:text-gray-400 outline-none"
      />

      <button
        type="submit"
        disabled={!message.trim()}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-200 hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        <FaPaperPlane className="text-sm" />
      </button>
    </form>
  );
}

export default ChatInput;
