import {
  ContactsOutlined,
  LogoutOutlined,
  MessageOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Tooltip } from "antd";
import Sider from "antd/es/layout/Sider";
import MenuItem from "antd/es/menu/MenuItem";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom/dist";
import ProfileForm from "../features/profile/ProfileForm";
import { logout } from "../redux/slices/userSlice";
import { appRoutes } from "../routes/AppRoutes";

const itemsNavbar = [
  {
    title: "Chat",
    icon: <MessageOutlined />,
    path: "/",
  },
  {
    title: "Groups",
    icon: <UsergroupAddOutlined />,
    path: "/groups",
  },
  {
    title: "Contacts",
    icon: <ContactsOutlined />,
    path: "/contacts",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keySelected, setKeySelected] = useState("0");
  const { pathname } = useLocation();
  useMemo(() => {
    setKeySelected(pathname);
  }, [pathname]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(appRoutes.AUTH);
  };

  const dropdownItems = [
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
      <Sider
        className="flex flex-col h-screen"
        theme="light"
        width="fit-content"
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
          <Menu selectedKeys={[keySelected]}>
            {itemsNavbar.map((item) => (
              <MenuItem key={item.path} icon={item.icon}>
                <Tooltip title={item.title} placement="right">
                  <NavLink to={item.path} />
                </Tooltip>
              </MenuItem>
            ))}
          </Menu>
          <div className="flex justify-center hover:cursor-pointer">
            <Dropdown
              menu={{
                items: dropdownItems,
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
      {isModalOpen && (
        <ProfileForm isModalOpen={isModalOpen} handleCancel={handleCancel} />
      )}
    </>
  );
};
export default Sidebar;
