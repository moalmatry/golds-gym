import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h6" pb="50px" mt="20px">
          Developed By{" "}
          <a
            href="https://www.facebook.com/mohamed.almatry.7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#FF2625" }}
          >
            Mohamed Almatry
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
