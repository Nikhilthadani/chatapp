import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import CircleIcon from "@mui/icons-material/Circle";
import CopyIcon from "@mui/icons-material/ContentCopy";

import User from "./User";
import { init } from "./socket";
import { EVENTS } from "../constants";
import { useLocation, useParams } from "react-router-dom";
const ChatPage = () => {
  const roomId = useParams().roomId;
  const location = useLocation();
  const socketRef = useRef(null);
  const [users, setUsers] = useState([]);
  const joinedListner = (data) => {
    setUsers(data.users);
  };
  useEffect(() => {
    const initSocket = async () => {
      socketRef.current = await init();

      socketRef.current.emit(EVENTS.JOIN, {
        username: location.state?.username,
        roomId,
      });
      socketRef.current.on(EVENTS.JOINED, joinedListner);

      socketRef.current.emit(EVENTS.CHECK_OLD_CHATS, { roomId });
    };
    // SEND JOIN EVENT
    initSocket();

    return () => {
      socketRef.current && socketRef.current.off(EVENTS.JOINED);
    };
  }, [location.state.username, roomId]);
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"90vh"}
      alignItems={"flex-start"}
      justifyContent="flex-start"
      paddingTop={2}
      margin={"auto"}
    >
      <Box display={"flex"} flex={0.2} flexDirection={"column"}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography variant="h5" fontWeight={"bold"} fontFamily={"inherit"}>
            Online
          </Typography>
          <CircleIcon
            fontSize="small"
            sx={{ color: "green", padding: 0.5, textAlign: "center" }}
          />
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          gap={1}
          flexWrap="wrap"
          padding={1}
        >
          {users.map((user) => (
            <User username={user.username} />
          ))}
        </Box>
      </Box>
      <Box
        display={"flex"}
        height="100%"
        flexDirection={"column"}
        margin={"auto"}
        flex={0.8}
      >
        <Chat
          username={location.state?.username}
          roomId={roomId}
          socketRef={socketRef}
        />
      </Box>
    </Box>
  );
};

export default ChatPage;
