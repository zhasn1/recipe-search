import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
  const scrollToRecipes = () => {
    const element = document.getElementById("recipes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "20px",
      }}
    >
      <Typography sx={{ fontWeight: "600", fontSize: "26px" }}>
        Recipe Search
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { lg: "44px", xs: "40px" },
          mb: "23px",
          mt: "30px",
        }}
      >
        Discover new <br /> recipes
      </Typography>
      <Stack>
        <Button
          onClick={scrollToRecipes}
          sx={{
            marginTop: "45px",
            width: "200px",
            textAlign: "center",
            background: "#0A6847",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
            "&:hover": { background: "#085438" },
          }}
        >
          Explore Recipes
        </Button>
      </Stack>
      <Typography
        sx={{
          fontWeight: 600,
          color: "#FFDB5C",
          opacity: 0.2,
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        recipes
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
