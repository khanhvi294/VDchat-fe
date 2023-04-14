import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    window.open("http://localhost:5000/auth/google");
  };

  const handleLoginFacebook = () => {
    window.open("http://localhost:5000/auth/facebook");
  };
  return (
    <div>
      <Button
        type="primary"
        className="bg-red-300 mr-5"
        icon={<SearchOutlined />}
        // onClick={() => handleLoginGoogle()}
      >
        {/* Google login */}
        <Link to={`http://localhost:5000/auth/google`}>google</Link>
      </Button>
      <Button
        type="primary"
        className="bg-red-300"
        icon={<SearchOutlined />}
        onClick={() => handleLoginFacebook()}
      >
        Facebook login
      </Button>
    </div>
  );
};

export default LoginPage;
