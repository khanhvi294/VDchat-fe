import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useParams } from "react-router-dom";

const ChatContainer = () => {
  const { conversationId } = useParams();
  console.log(conversationId);
  return (
    <>
      <ChatHeader />
      <ChatBody conversationId={conversationId} />
      <ChatFooter conversationId={conversationId} />
    </>
  );
};

export default ChatContainer;
