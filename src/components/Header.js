import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
const Header = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#f79950" }}>
      <Toolbar>
        <MarkChatReadIcon sx={{ padding: 1, color: "black" }} />
        <Typography
          fontFamily={"inherit"}
          color="#484d54"
          fontWeight={"bold"}
          width={"100%"}
          textAlign={"center"}
          fontSize={30}
        >
          CHAT APP With Node React Socket.IO
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
