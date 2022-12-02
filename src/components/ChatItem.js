import { Box, Typography } from "@mui/material";
import React from "react";

const ChatItem = ({ message, user }) => {
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
    >
      <Typography
        flex={0.3}
        color={"#f43a09"}
        fontWeight={"bold"}
        fontSize={"12px"}
      >
        {user}
      </Typography>
      <Typography flex={0.7} width={"auto"} sx={{ wordWrap: "break-word" }}>
        {message}
      </Typography>
    </Box>
  );
};

export default ChatItem;
