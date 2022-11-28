import { io } from "socket.io-client";

export const init = async () => {
  return io("http://localhost:5000", {
    forceNew: true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  });
};
