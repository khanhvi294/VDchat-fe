import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setSocket } from "../redux/slices/socketSlice";

const SocketClient = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data?.info);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_REACT_APP_SERVER_URL);
    dispatch(setSocket(socket));

    socket.emit("join", user?._id);

    return () => {
      socket.close();
    };
  }, [user?._id]);

  return <></>;
};

export default SocketClient;
