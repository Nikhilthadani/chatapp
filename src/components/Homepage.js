import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { v4 as generateRoomId } from "uuid";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
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
    <Box width="100%" height={"100%"} margin={"100px auto"}>
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
          fontWeight="bold"
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
            fontWeight: "bold",
          }}
        >
          <TextField
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            margin="normal"
            variant="filled"
            fullWidth
            placeholder="Enter Room Id"
            sx={{ bgcolor: "#ccc" }}
          />
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            margin="normal"
            variant="filled"
            fullWidth
            placeholder="Enter Username"
            sx={{ bgcolor: "#ccc" }}
          />
          <Button
            endIcon={<KeyboardDoubleArrowRightIcon />}
            color="success"
            type="submit"
            variant="contained"
            sx={{ marginLeft: "auto", marginTop: 2 }}
          >
            Join
          </Button>
        </form>
        <Button
          color="secondary"
          onClick={autogenerateRoomId}
          variant="contained"
        >
          Auto Generate ROOM Id{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
