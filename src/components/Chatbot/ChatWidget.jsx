import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <ChatWindow onClose={() => setOpen(false)} />
      )}

      <ChatButton onClick={() => setOpen(!open)} />
    </>
  );
}

export default ChatWidget;