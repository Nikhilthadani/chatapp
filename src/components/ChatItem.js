import { Box, Typography } from "@mui/material";
import React from "react";

const ChatItem = ({ message, user, currentUser }) => {
  return (
    <Box
      padding={1}
      bgcolor={"white"}
      border={"1px solid #ccc"}
      borderRadius={3}
      width="30%"
      display={"flex"}
      flexDirection={"column"}
      margin={1.2}
      marginLeft={currentUser === user ? "auto" : "5px"}
    >
      <Typography
        flex={0.3}
        color={"#f43a09"}
        fontWeight={"bold"}
        fontSize={"12px"}
      >
        {user}
      </Typography>
      <Typography flex={0.7} width={"auto"}>
        {message}
      </Typography>
    </Box>
  );
};

export default ChatItem;
