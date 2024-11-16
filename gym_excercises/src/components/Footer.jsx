import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      {" "}
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <div className="flex justify-center items-center gap-3">
          <div className="border-2 border-red-500 rounded-lg p-2">
            <img src={Logo} alt="logo" width="80px" />
          </div>
          <div className="flex flex-col">
            <Typography variant="h5"  mt="5">
              {" "}
              My Fitness
            </Typography>
            <Typography variant="h7" mt="0">
              {" "}
              Web App
            </Typography>
          </div>
        </div>

        <Typography variant="h5" mb="20px" mt="0">
          Sample exercise website to learn about APIs
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
