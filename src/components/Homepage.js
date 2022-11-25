import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 as generateRoomId } from "uuid";
const Homepage = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (roomId.trim() !== "" && username.trim() !== "") {
      moveToChatPage();
    }
  };
  const moveToChatPage = () => {
    navigate(`/chat/${roomId}`);
  };
  const autoGenerateRoomId = () => {
    setRoomId(generateRoomId());
  };
  return (
    <Box width={"100%"} height={"100vh"} margin={"100px auto"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"70%"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"50%"}
        margin={"auto"}
      >
        <Typography
          fontFamily={"verdana"}
          width="100%"
          variant="h3"
          padding={2}
          textAlign={"center"}
        >
          Join Any Chat Room
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <TextField
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            variant="standard"
            margin="normal"
            fullWidth
            placeholder="Enter ROOM ID"
          />
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            variant="standard"
            margin="normal"
            fullWidth
            placeholder="Enter Username"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginLeft: "auto", marginTop: 2 }}
          >
            JOIN
          </Button>
        </form>
        <Button onClick={autoGenerateRoomId} variant="outlined">
          Auto Generate ROOM ID
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
