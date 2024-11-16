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
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb="23px"
        letterSpacing={0}
      >
        Sweat,Smile
        <br />
        and Repeat..
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
