import {
  ContactsOutlined,
  MessageOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import Test from "../component/Test";
import ChatList from "../features/chat/ChatList";
import Contact from "../features/contact/Contact";
import Group from "../features/group/Group";
import ChatSidebar from "./ChatSidebar";

function getItem(label, key, icon, component, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
    component,
  };
}
const items = [
  getItem("Option 1", "0", <MessageOutlined />, <ChatList />),
  getItem("Option 1", "1", <UserOutlined />, <Test />),
  getItem("Option 2", "2", <TeamOutlined />, <Group />),
  getItem("Option 3", "3", <ContactsOutlined />, <Contact />),
];

const navbarItems = [
  {
    title: "Chat",
    icon: <MessageOutlined />,
  },
  {
    title: "hihi",
    icon: <MessageOutlined />,
  },
];
console.log(items[0].component);
const Sidebar = () => {
  const [component, setComponent] = useState(items[0].component);
  return (
    <Sider className="flex flex-col h-screen" width="fit-content">
      <Layout className="">
        <Sider collapsed={true} theme="light" className="h-screen">
          {/* <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          /> */}
          <Menu
            defaultSelectedKeys={["0"]}
            mode="inline"
            items={items}
            onClick={(item) => setComponent(items[item.key].component)}
          />
        </Sider>

        <ChatSidebar children={component} />
      </Layout>
    </Sider>
  );
};
export default Sidebar;
