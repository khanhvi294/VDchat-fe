import React from "react";
import { Outlet, Navigate } from "react-router";
import { appRoutes } from "./AppRoutes";
import { useSelector } from "react-redux";

const PublicRoutes = () => {
  const { isLogin } = useSelector((state) => state.user.data);

  return isLogin ? <Navigate to={appRoutes.CHAT} /> : <Outlet />;
  // return <Outlet />;
};

export default PublicRoutes;
