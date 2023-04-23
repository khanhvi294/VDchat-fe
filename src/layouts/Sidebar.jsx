import {
  ContactsOutlined,
  EditOutlined,
  LogoutOutlined,
  MessageOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Dropdown, Layout, Menu, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom/dist";
import { logout } from "../redux/slices/userSlice";

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
  getItem(
    "Option 1",
    "0",
    <NavLink to="/">
      <MessageOutlined />
    </NavLink>
  ),
  getItem(
    "Option 1",
    "1",
    <NavLink to="/groups">
      {" "}
      <TeamOutlined />
    </NavLink>
  ),

  getItem(
    "Option 2",
    "2",
    <NavLink to="/contacts">
      <ContactsOutlined />
    </NavLink>
  ),
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keySelected, setKeySelected] = useState("0");
  const { pathname } = useLocation();
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

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const items = [
    {
      label: <p onClick={showModal}>Profile</p>,
      key: "1",
      icon: <UserOutlined />,
      title: "",
    },
    {
      label: <p onClick={handleLogout}>Log out</p>,
      key: "2",
      danger: true,
      icon: <LogoutOutlined />,
      title: "",
    },
  ];

  return (
    <>
      <Sider className="flex flex-col h-screen" width="fit-content">
        <Layout>
          <Sider
            trigger={null}
            collapsed={true}
            theme="light"
            className="h-screen"
          >
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
                selectedKeys={[keySelected]}
                // selectedKeys={["2"]}
                mode="inline"
                items={itemsNavbar}
              />
              <div className="flex justify-center hover:cursor-pointer">
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="topLeft"
                  arrow={{
                    pointAtCenter: true,
                  }}
                  trigger={["click"]}
                  overlayClassName="w-32"
                >
                  <Avatar />
                </Dropdown>
              </div>
            </div>
          </Sider>
        </Layout>
      </Sider>

      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="fit-content"
        className="hover:cusor-pointer"
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
