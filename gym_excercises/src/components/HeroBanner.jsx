import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import heroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="10px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Unlock Your Strength, One Move at a Time
      </Typography>
      <Typography
        fontWeight="900"
        sx={{
          fontSize: { lg: "50px", xs: "38px" },
          lineHeight: { lg: "60px", xs: "45px" },
          mb: "20px",
        }}
        color="#333"
      >
        Fitness That Fits <br />
        <span style={{ color: "#ff2625" }}>Your Life</span>
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="10px">
        Check out the most effective exercises below !!
      </Typography>
      {/* <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625" }}
      >
        Explore Exercises
      </Button> */}
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          display: {
            lg: "block",
            xs: "none",
          },
          opacity: 0.1,
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={heroBannerImage} alt="banner" className="hero-banner-img " />
    </Box>
  );
};

export default HeroBanner;
