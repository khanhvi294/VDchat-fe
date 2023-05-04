import {
  ArrowLeftOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Input, Space, Typography } from "antd";
import React, { useRef, useState } from "react";
import ListContact from "../contact/ListContact";
import UsersList from "./UsersList";

const { Title } = Typography;
const ChatList = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const modalSearch = useRef();
  const handleClickBack = () => {
    modalSearch.current.classList.remove("animate-fade-in");
    modalSearch.current.classList.add("animate-fade-out");
    setTimeout(() => {
      setIsSearch(false);
    }, 100);
    setInputSearch("");
  };

  return (
    <div className="w-full h-full !bg-[#f5f7fb] flex flex-col">
      <div className="pt-7 pl-7 pr-5 pb-2 !bg-[#f5f7fb]">
        <Title className="pb-7" level={4}>
          Chats
        </Title>
        <div className="flex items-center">
          {isSearch && <ArrowLeftOutlined onClick={handleClickBack} />}
          <Input
            size="large"
            placeholder="Search user"
            value={inputSearch}
            prefix={<SearchOutlined />}
            onFocus={() => {
              setIsSearch(true);
            }}
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
            className={`${isSearch ? "w-[290px] " : ""} ml-auto`}
          />
        </div>
      </div>

      <div className="flex flex-col flex-grow overflow-y-auto relative pl-7 pr-5">
        {isSearch && (
          <div
            ref={modalSearch}
            className={`absolute inset-0 bg-[#f5f7fb] w-full h-full  z-10 ${
              isSearch ? "animate-fade-in" : "animate-fade-out"
            }`}
          >
            {inputSearch && <ListContact searchValue={inputSearch} />}
          </div>
        )}
        <Space direction="vertical" size={16} className="my-6">
          <Space wrap size={16}>
            <Badge dot={true} offset={[-1, 30]} status="success" size="default">
              <Avatar size="large" icon={<UserOutlined />} />
            </Badge>
            <Badge
              dot={true}
              offset={[-1, 30]}
              status="success"
              size="modalSearchult"
            >
              <Avatar size="large" icon={<UserOutlined />} />
            </Badge>
            <Avatar size="large" icon={<UserOutlined />} />
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Space>
        <Title level={5} className="mb-3">
          Recent
        </Title>
        <UsersList />
      </div>
    </div>
  );
};

export default ChatList;
