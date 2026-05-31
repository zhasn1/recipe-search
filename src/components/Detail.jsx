import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { getIngredients, getInstructions } from "../utils/mealUtils";

const Detail = ({ meal }) => {
  if (!meal) return null;

  const ingredients = getIngredients(meal);
  const instructions = getInstructions(meal);

  return (
    <Stack
      sx={{
        gap: "60px",
        p: "20px",
        alignItems: "center",
        flexDirection: { lg: "row" },
      }}
    >
      <img
        className="detail-image"
        src={meal.strMealThumb}
        alt={meal.strMeal}
        loading="lazy"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h2">{meal.strMeal}</Typography>

        <Box
          sx={{
            bgcolor: "#f9f9f9",
            borderRadius: "10px",
            p: "20px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: { lg: "500px", xs: "300px" },
            height: "auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", letterSpacing: "1px", mb: "10px" }}
          >
            Ingredients:
          </Typography>
          <ul style={{ paddingLeft: "30px" }}>
            {ingredients.map(({ ingredient, measure }, i) => (
              <li key={`${ingredient}-${i}`}>
                <span>
                  {measure} {ingredient}
                </span>
              </li>
            ))}
          </ul>

          <Typography
            variant="h6"
            sx={{ fontWeight: "700", letterSpacing: "1px", mt: "20px" }}
          >
            Instructions:
          </Typography>
          <ol style={{ paddingLeft: "30px", marginTop: "8px" }}>
            {instructions.map((step) => (
              <li key={step.slice(0, 60)} style={{ marginBottom: "8px" }}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Box>

        {meal.strYoutube && (
          <Stack>
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                width: "220px",
                textAlign: "center",
                background: "#FFDB5C",
                padding: "14px",
                fontSize: "22px",
                textTransform: "none",
                color: "#3A1212",
                borderRadius: "4px",
              }}
            >
              Watch on YouTube
            </a>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Detail;
