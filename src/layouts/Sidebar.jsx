import { Menu, Tabs } from "antd";
import ChatSidebar from "./ChatSidebar";
import {
  MessageOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
const navbarItems = [
  {
    title: "Chat",
    icon: <MessageOutlined />,
  },
];
const Sidebar = () => {
  return (
    <Sider collapsed={true} theme="light">
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={navbarItems} />
    </Sider>
  );
};
export default Sidebar;
