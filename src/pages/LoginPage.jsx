import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../features/auth/SocialLogin";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    window.open("http://localhost:5000/auth/google");
  };

  const handleLoginFacebook = () => {
    window.open("http://localhost:5000/auth/facebook");
  };
  return (
    <div className="flex justify-center h-screen items-center bg-gray-100">
      <SocialLogin />
      {/* <Button
        type="primary"
        className="bg-red-300 mr-5"
        icon={<SearchOutlined />}
        onClick={() => handleLoginGoogle()}
      >
      </Button>
      <Button
        type="primary"
        className="bg-red-300"
        icon={<SearchOutlined />}
        onClick={() => handleLoginFacebook()}
      >
        Facebook login
      </Button> */}
    </div>
  );
};

export default LoginPage;
