import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAccessToken } from "../redux/slices/userSlice";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 84,
    }}
    spin
  />
);

const RedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get("accessToken");
    if (!token) return;
    dispatch(setAccessToken(token));
    navigate("/");
  }, [dispatch, navigate, searchParams]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Spin indicator={antIcon} />;
    </div>
  );
};

export default RedirectPage;
