import {
  CloseCircleOutlined,
  DeleteOutlined,
  DotChartOutlined,
  FileImageOutlined,
  SearchOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import StickyBox from "react-sticky-box";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import { getMessages } from "../api/messageApi";
import { useSelector } from "react-redux";

import { useMutation } from "@tanstack/react-query";
import { Avatar, Badge, Dropdown, Input, Layout, Modal } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { blockUser, unblockUser } from "../api/userApi";
import ChatHeader from "../features/chat/ChatHeader";
import ChatBody from "../features/chat/ChatBody";
import ChatFooter from "../features/chat/ChatFooter";
import ChatContainer from "../features/chat/ChatContainer";
import ChatBackground from "../features/chat/ChatBackground";

const ChatMain = ({ children }) => {
  return (
    <Layout className="bg-white h-screen">
      {children}
      {/* {conversationId ? (
        <ChatContainer conversationId={conversationId} />
      ) : (
        <ChatBackground />
      )} */}
    </Layout>
  );
};

export default ChatMain;
