import Sider from "antd/es/layout/Sider";
import { Children } from "react";

const ChatSidebar = ({ children }) => {
  return (
    <div className="!bg-[#f5f7fb] w-96 overflow-y-auto h-screen overflow-hidden">
      {children}
    </div>
  );
};

export default ChatSidebar;
