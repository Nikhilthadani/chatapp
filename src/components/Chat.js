import { Button, Card, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CopyIcon from "@mui/icons-material/ContentCopy";
import { EVENTS } from "../constants";
import copy from "copy-to-clipboard";
const Chat = ({ socketRef, roomId, username }) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const broadcastListener = (chats) => {
    setChats(chats);
  };
  useEffect(() => {
    if (socketRef.current) {
      socketRef.current?.on(EVENTS.BROADCAST_MSG, ({ chats }) => {
        broadcastListener(chats);
      });
      socketRef.current?.on(EVENTS.RECEIVE_OLD_CHATS, (data) => {
        setChats(data.oldChats);
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
      width={"90%"}
      bgcolor={"#32374c"}
      height={"90%"}
      padding={1}
    >
      <Card
        sx={{
          padding: 1,
          margin: "8px",
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "pink",
        }}
      >
        <Typography>
          Room: <b>{roomId}</b>
        </Typography>
        <Button
          onClick={() => copy(roomId)}
          color="info"
          padding={1}
          endIcon={<CopyIcon />}
        >
          Copy
        </Button>
      </Card>
      <Box
        sx={{
          overflow: "scroll",
          borderRadius: 1,
          overflowX: "hidden",
          overflowY: "auto",
          height: "800px",
        }}
      >
        {chats?.map((chat, index) => (
          <ChatItem
            user={chat.username}
            currentUser={username}
            message={chat.message}
            key={index}
          />
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
              marginLeft: 1,
              width: "10%",
              background: "inherit",
              color: "white",
              margin: "auto",
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
