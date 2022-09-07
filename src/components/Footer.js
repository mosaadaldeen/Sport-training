import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" px="40px" alignItems="center" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤️ by{" "}
          <a
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#000" }}
            target="_blank"
            href="https://www.linkedin.com/in/mohammad-saadaldeen/"
          >
            Mohammad Saadaldeen
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
