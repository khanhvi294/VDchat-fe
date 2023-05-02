import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import ChatMain from "./ChatMain";
import ChatSidebar from "./ChatSidebar";
import Sidebar from "./Sidebar";
// import socket from "../configs/socketClient";
import {
  ContactsOutlined,
  MessageOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useMemo, useState } from "react";
import ChatList from "../features/conversation/ChatList";
import GroupList from "../features/group/GroupList";

const MainLayout = () => {
  const itemsNavbar = [
    {
      title: "Chat",
      icon: <MessageOutlined />,
      component: <ChatList />,
    },
    {
      title: "Groups",
      icon: <UsergroupAddOutlined />,
      component: <GroupList />,
    },
    {
      title: "Contacts",
      icon: <ContactsOutlined />,
      component: "/contacts",
    },
  ];
  const [keySelected, setKeySelected] = useState(itemsNavbar[0].title);
  const childComponent = useMemo(() => {
    switch (keySelected) {
      case itemsNavbar[0].title:
        return itemsNavbar[0].component;
      case itemsNavbar[1].title:
        return itemsNavbar[1].component;
    }
  }, [keySelected]);
  const children = useMemo(() => <Outlet />, []);
  return (
    <Layout className="overflow-hidden">
      <Sidebar
        itemsNavbar={itemsNavbar}
        keySelected={keySelected}
        setKeySelected={setKeySelected}
      />
      <ChatSidebar>{childComponent}</ChatSidebar>
      <ChatMain>{children}</ChatMain>
    </Layout>
  );
};

export default MainLayout;
