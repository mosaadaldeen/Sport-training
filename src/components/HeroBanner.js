import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", sx: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{ fontSize: { lg: "44px", sx: "40px" } }}
        mb={3}
        mt={3}
      >
        Sweet, Smile, <br /> and Repeat
      </Typography>
      <Typography mb={4} fontSize="22px" lineHeight={"35px"}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        sx={{ backgroundColor: "#ff2526", padding: "20px" }}
        variant="contained"
        color="error"
      >
        Explore exercises
      </Button>
      <Typography
        fontSize="200px"
        fontWeight={700}
        color="#ff2526"
        width="100%"
        sx={{ opacity: "0.1", display: { lg: "block", sx: "none" } }}
      >
        Exercises
      </Typography>
      <img
        src={HeroBannerImage}
        alt="Hero Banner"
        className="hero-banner-img"
        height="100vh"
      />
    </Box>
  );
};

export default HeroBanner;
