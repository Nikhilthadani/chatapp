import { Box, Typography } from "@mui/material";
import React from "react";
import Avatar from "react-avatar";
const User = ({ username }) => {
  return (
    <Box
      width={"30%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems="center"
      marginLeft={0.5}
    >
      <Avatar style={{ padding: 2 }} name={username} size={50} round="14px" />
      <Typography textAlign={"center"}>{username}</Typography>
    </Box>
  );
};

export default User;
