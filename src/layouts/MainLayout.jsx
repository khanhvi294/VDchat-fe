import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import ChatMain from "./ChatMain";
import Sidebar from "./Sidebar";
import StickyBox from "react-sticky-box";
import ChatSidebar from "./ChatSidebar";
import Sider from "antd/es/layout/Sider";
// import socket from "../configs/socketClient";
import { useEffect } from "react";

const MainLayout = () => {
  // useEffect(() => {
  //   socket.emit("join", "memay");
  //   console.log("fsdflsdkj");
  //   socket.on("connect", () => {
  //     console.log("sockett ", socket.id); // true
  //   });
  //   socket.emit("hahah", "dcm");
  //   socket.on("hello", (data) => {
  //     console.log("fsdfsdf ", data);
  //   });
  // }, []);
  return (
    <Layout>
      <Sidebar />
      <ChatSidebar>
        <Outlet />
      </ChatSidebar>
      <ChatMain />
    </Layout>
  );
};

export default MainLayout;
