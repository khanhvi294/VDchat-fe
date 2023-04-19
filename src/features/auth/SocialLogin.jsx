import React, { useRef } from "react";
import { Button, Space, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { GOOGLE_LOGIN_URL, FACEBOOK_LOGIN_URL } from "../../configs/socialLink";

const SocialLogin = () => {
  const loginItems = useRef([
    {
      icon: <SearchOutlined />,
      url: GOOGLE_LOGIN_URL,
      title: "Google",
    },
    {
      icon: <SearchOutlined />,
      url: FACEBOOK_LOGIN_URL,
      title: "Facebook",
    },
  ]).current;

  return (
    <div className="w-[30%] h-[50%] bg-white rounded-lg p-3">
      <h3 className="text-center">VD Chat</h3>
      <div className="mt-4 flex flex-col gap-5">
        {loginItems.map((item) => (
          <Button
            type="primary"
            className="bg-red-300"
            icon={item.icon}
            href={item.url}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialLogin;
