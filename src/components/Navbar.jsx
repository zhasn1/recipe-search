import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const scrollToRecipes = () => {
    const element = document.getElementById("recipes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        px: "20px",
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        sx={{ gap: "40px", fontSize: "24px", alignItems: "flex-end" }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #75A47F",
          }}
        >
          Home
        </Link>
        <button
          onClick={scrollToRecipes}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            background: "none",
            border: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
          }}
        >
          Recipes
        </button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
