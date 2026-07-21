import { X } from "lucide-react";
import ChatContainer from "./Core/ChatContainer";

function ChatWindow({ onClose }) {
  return (
    <div
      className="
        fixed
        bottom-26
        right-6
        w-[380px]
        h-[580px]
        bg-white
        rounded-2xl
        shadow-2xl
        overflow-hidden
        z-50
      "
    >
      <button onClick={onClose} className="absolute top-4 right-4 z-50">
        <X />
      </button>

      <div className="fixed bottom-24 right-6 w-[380px] h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200">
        <ChatContainer />
      </div>
    </div>
  );
}

export default ChatWindow;
