import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/logo.png";

const Footer = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#DAD3BE",
      color: "white",
      height: "70px",
      width: "100%",
      bottom: 0,
      left: 0,
      right: 0,
    }}
  >
    <Stack direction="row" sx={{ gap: "16px" }}>
      <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h6">
          Made by{" "}
          <a
            href="https://github.com/Nawlage"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            Zach
          </a>
        </Typography>
      </Box>
    </Stack>
  </Box>
);

export default Footer;
