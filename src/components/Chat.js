import { Button, Card, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CopyIcon from "@mui/icons-material/ContentCopy";

import { EVENTS } from "../constants";
const Chat = ({ socketRef, roomId, username }) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  console.log("chats", chats);
  const broadcastListener = (chats) => {
    setChats(chats);
  };
  useEffect(() => {
    if (socketRef.current) {
      socketRef.current?.on(EVENTS.BROADCAST_MSG, ({ chats }) => {
        broadcastListener(chats);
      });

      socketRef.current.on(EVENTS.RECEIVE_OLD_CHATS, ({ oldChats }) => {
        setChats(oldChats);
      });
    }
  }, [socketRef?.current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    // emit an event with data = message
    if (message.trim().length > 0) {
      console.log("EMITTING EVENT");
      socketRef?.current?.emit(EVENTS.NEW_CHAT, {
        roomId,
        username,
        message,
      });
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minWidth="80%"
      width={"80%"}
      bgcolor={"#32374c"}
      height={"90%"}
      padding={2}
    >
      {" "}
      <Card
        sx={{
          padding: 1,
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "pink",
          margin: "5px",
        }}
      >
        <Typography>
          Room: <b>{roomId}</b>
        </Typography>
        <Button color="info" padding={1} endIcon={<CopyIcon />}>
          Copy
        </Button>
      </Card>
      <Box
        sx={{
          padding: "5px",
          overflow: "scroll",
          borderRadius: 2,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {chats?.map((chat, index) => (
          <ChatItem user={chat.username} message={chat.message} key={index} />
        ))}
      </Box>
      <Box marginTop={"auto"} padding={1}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            width: "100%",
            padding: 1,
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your Message"
            InputProps={{ disableUnderline: true }}
            variant="standard"
            type={"text"}
            sx={{
              height: "80%",
              width: "75%",
              bgcolor: "white",
              borderRadius: 10,
              outlineWidth: "none",
              padding: 0.8,
            }}
          />
          <IconButton
            type="submit"
            sx={{
              width: "10%",
              background: "inherit",
              color: "white",
              margin: "auto",
              ml: "10px",
            }}
          >
            <SendRoundedIcon fontSize="large" />
          </IconButton>
        </form>
      </Box>
    </Box>
  );
};

export default Chat;
