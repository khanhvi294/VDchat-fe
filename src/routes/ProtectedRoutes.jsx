import React from "react";
import { Outlet, Navigate } from "react-router";
import { appRoutes } from "./AppRoutes";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { isLogin } = useSelector((state) => state.user.data);

  return isLogin ? <Outlet /> : <Navigate to={appRoutes.AUTH} replace />;
};

export default ProtectedRoutes;
