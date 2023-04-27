import { FileImageOutlined, SmileOutlined } from "@ant-design/icons";
import React from "react";

import { Input } from "antd";
import { Footer } from "antd/es/layout/layout";

const ChatFooter = () => {
  return (
    <Footer className="bg-white border-t-2 h-20 sticky bottom-0 flex justify-between items-center">
      <Input
        size="large"
        placeholder="Message"
        className="rounded-2xl bg-[#e6ebf5] text-black hover:border-[#a49eed]"
      />
      <div className="flex justify-around w-24">
        <SmileOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
        <FileImageOutlined style={{ fontSize: "22px", color: "#a49eed" }} />
      </div>
    </Footer>
  );
};

export default ChatFooter;
