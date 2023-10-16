import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";


const projectID = "85fef210-eaa2-4d20-b0b2-8ae70123e75f";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;

// import React from "react";
// import { ChatEngine } from "react-chat-engine";
// import "./App.css";
// import ChatFeed from "./components/ChatFeed";

// const App = () => {
//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="85fef210-eaa2-4d20-b0b2-8ae70123e75f"
//       userName="Henok"
//       userSecret="123"
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//     />
//   );
// };

// export default App;
