import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const Header = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#f5f5f5" }}>
      <Toolbar>
        <ChatBubbleOutlineIcon
          fontSize="medium"
          sx={{ padding: 1, color: "black" }}
        />
        <Typography
          fontFamily={"verdana"}
          color={"#484d54"}
          fontWeight={"bold"}
          width={"100%"}
          textAlign={"center"}
          fontSize={30}
        >
          Let's Chat!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
