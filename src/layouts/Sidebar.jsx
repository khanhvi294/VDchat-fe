import {
  ContactsOutlined,
  DotChartOutlined,
  EditOutlined,
  LogoutOutlined,
  MessageOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Dropdown, Image, Layout, Menu, Modal } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import Test from "../component/Test";
import ChatList from "../features/chat/ChatList";
import Contact from "../features/contact/Contact";
import Group from "../features/group/Group";
import ChatSidebar from "./ChatSidebar";
import MenuItem from "antd/es/menu/MenuItem";
import Meta from "antd/es/card/Meta";

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
const itemsNavbar = [
  getItem("Option 1", "0", <MessageOutlined />, <ChatList />),
  getItem("Option 1", "1", <UserOutlined />, <Test />),
  getItem("Option 2", "2", <TeamOutlined />, <Group />),
  getItem("Option 3", "3", <ContactsOutlined />, <Contact />),
];
function getItem2(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
}
const items2 = [
  getItem2("Navigation One", "sub1", <Avatar />, [
    getItem2("Option 1", "1"),
    getItem2("Option 2", "2"),
    getItem2("Option 3", "3"),
  ]),
];

const Sidebar = () => {
  //hshs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //shs
  const items = [
    {
      label: "profile",
      key: "1",
      icon: <UserOutlined onClick={showModal} />,
    },
    {
      label: "Logout",
      key: "2",
      danger: true,
      icon: <LogoutOutlined />,
    },
  ];
  const [component, setComponent] = useState(itemsNavbar[0].component);

  return (
    <>
      <Sider className="flex flex-col h-screen" width="fit-content">
        <Layout>
          <Sider collapsed={true} theme="light" className="h-screen">
            <div className="flex flex-col justify-between h-full pb-4">
              <div
                style={{
                  height: 32,
                  margin: 16,
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <img
                  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                  width={28}
                  className="m-auto"
                />
              </div>
              <Menu
                defaultSelectedKeys={["0"]}
                mode="inline"
                items={itemsNavbar}
                onClick={(item) =>
                  setComponent(itemsNavbar[item.key].component)
                }
              />
              <div className="flex justify-center">
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="topLeft"
                  arrow={{
                    pointAtCenter: true,
                  }}
                  // trigger={["click"]}
                  overlayClassName="w-32"
                >
                  <Avatar />
                </Dropdown>
              </div>
            </div>
          </Sider>

          <ChatSidebar children={component} />
        </Layout>
      </Sider>

      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="fit-content"
      >
        <Card
          style={{
            width: 334,
          }}
          cover={
            <img
              className="w-fit"
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            // <SettingOutlined key="setting" />,
            <p>
              {" "}
              <EditOutlined key="edit" /> chỉnh sửa
            </p>,
            // <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title={<p className="text-xl">Khánh Vi</p>}
            description="Khanhci294@gmail.com"
          />
        </Card>
      </Modal>
    </>
  );
};
export default Sidebar;
