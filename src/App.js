import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="85fef210-eaa2-4d20-b0b2-8ae70123e75f"
      userName="Henok"  
      userSecret="123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
