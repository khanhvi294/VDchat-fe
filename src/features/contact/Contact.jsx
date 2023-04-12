import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Title from "antd/es/skeleton/Title";
import React from "react";
import ListContact from "./ListContact";

const Contact = () => {
  return (
    <div className="w-full h-full !bg-[#f5f7fb] flex flex-col">
      <div className="sticky top-0 pt-7 pl-7 pr-7 pb-2 !bg-[#f5f7fb]">
        <Title className="pb-7" level={4}>
          Contacts
        </Title>
        <Input
          size="large"
          placeholder="Search user"
          prefix={<SearchOutlined />}
        />
      </div>
      <ListContact />
    </div>
  );
};

export default Contact;
