import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_REACT_APP_SERVER_URL);

export default socket;
