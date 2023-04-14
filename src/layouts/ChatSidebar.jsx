import Sider from "antd/es/layout/Sider";
import { Children } from "react";

const ChatSidebar = ({ children }) => {
  return <div className="!bg-[#f5f7fb] w-96 h-screen">{children}</div>;
};

export default ChatSidebar;
