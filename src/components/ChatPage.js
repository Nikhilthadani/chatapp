import React, { useState } from "react";
import { Box } from "@mui/material";
import User from "./User";
const ChatPage = () => {
  const [users, setUsers] = useState([
    { userid: "1", username: "Nikhil Thadani" },
    { userid: "2", username: "John Smith" },
    { userid: "3", username: "James Clear" },
  ]);
  return (
    <Box display="flex" height={"90vh"} marginTop={1}>
      <Box display={"flex"} gap={2} flex={0.2} flexWrap={"wrap"}>
        {users.map((user) => (
          <User username={user.username} />
        ))}
      </Box>
      <Box display={"flex"} flex={0.8}></Box>
    </Box>
  );
};

export default ChatPage;
