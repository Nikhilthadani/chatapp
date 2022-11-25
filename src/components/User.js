import React from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "react-avatar";
const User = ({ username }) => {
  return (
    <Box
      width={"30%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Avatar style={{ padding: 2 }} name={username} size={50} round="14px" />
      <Typography>{username}</Typography>
    </Box>
  );
};

export default User;
