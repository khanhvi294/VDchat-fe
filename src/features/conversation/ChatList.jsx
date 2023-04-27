import { Header } from "antd/es/layout/layout";
import { Avatar, Badge, Input, Space, Typography } from "antd";
import React from "react";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import UsersList from "./UsersList";

const { Title } = Typography;
const ChatList = () => {
  return (
    <div className="w-full h-full !bg-[#f5f7fb] flex flex-col">
      <div className="sticky top-0 pt-7 pl-7 pr-7 pb-2 !bg-[#f5f7fb]">
        <Title className="pb-7" level={4}>
          Chats
        </Title>
        <Input
          size="large"
          placeholder="Search user"
          prefix={<SearchOutlined />}
        />
        <Space direction="vertical" size={16} className="my-6">
          <Space wrap size={16}>
            <div>
              <Avatar size="large" icon={<UserOutlined />}></Avatar>
              <Badge status="success" />
            </div>

            <Avatar size="large" icon={<UserOutlined />} />
            <Avatar size="large" icon={<UserOutlined />} />
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Space>
        <Title level={5} className="mb-3">
          Recent
        </Title>
      </div>

      <UsersList />
    </div>
  );
};

export default ChatList;
