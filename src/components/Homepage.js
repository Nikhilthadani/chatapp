import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { v4 as generateRoomId } from "uuid";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomId.trim() !== "" && username.trim() !== "") {
      navigate(`/chat/${roomId}`, { state: { username } });
    }
  };
  const autogenerateRoomId = () => {
    setRoomId(generateRoomId());
  };
  return (
    <Box width="100%" height={"90vh"} margin={"100px auto"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width="70%"
        justifyContent={"center"}
        alignItems="center"
        height={"50%"}
        margin={"auto"}
      >
        <Typography
          fontFamily={"verdana"}
          width={"100%"}
          variant="h3"
          padding={2}
          textAlign={"center"}
        >
          Join Any Chat Room!
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
          }}
        >
          <TextField
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            margin="normal"
            variant="standard"
            fullWidth
            placeholder="Enter Room Id"
          />
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            margin="normal"
            variant="standard"
            fullWidth
            placeholder="Enter Username"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginLeft: "auto", marginTop: 2 }}
          >
            Join
          </Button>
        </form>
        <Button onClick={autogenerateRoomId} variant="outlined">
          Auto Generate ROOM Id{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
