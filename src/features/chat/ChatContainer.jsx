import React, { memo } from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useParams } from "react-router-dom";

const ChatContainer = () => {
  const { conversationId } = useParams();
  return (
    <>
      <ChatHeader />
      <ChatBody conversationId={conversationId} />
      <ChatFooter conversationId={conversationId} />
    </>
  );
};

export default memo(ChatContainer);
