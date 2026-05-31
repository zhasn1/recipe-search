import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strCategory, strArea } = meal;

  return (
    <Link className="recipe-card" to={`/recipe/${idMeal}`}>
      <img src={strMealThumb} alt={strMeal} loading="lazy" />
      <Stack direction="row">
        {strCategory && (
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              backgroundColor: "#75A47F",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {strCategory}
          </Button>
        )}
        {strArea && (
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              backgroundColor: "#FFDB5C",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {strArea}
          </Button>
        )}
      </Stack>
      <Typography
        sx={{
          ml: "21px",
          color: "#000",
          fontWeight: "bold",
          mt: "11px",
          pb: "10px",
          textTransform: "capitalize",
          fontSize: "22px",
        }}
      >
        {strMeal}
      </Typography>
    </Link>
  );
};

export default RecipeCard;
