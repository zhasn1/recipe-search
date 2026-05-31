import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import RecipeCard from "./RecipeCard";

const PER_PAGE = 10;

const Recipes = ({
  meals,
  noResults,
  filterTotal,
  currentPage: controlledPage,
  onFilterPageChange,
}) => {
  const [localPage, setLocalPage] = useState(1);

  const isFilterMode = filterTotal > 0;
  const currentPage = isFilterMode ? controlledPage : localPage;
  const totalCount = isFilterMode ? filterTotal : meals?.length || 0;

  useEffect(() => {
    if (!isFilterMode) setLocalPage(1);
  }, [meals, isFilterMode]);

  const displayMeals = isFilterMode
    ? meals
    : meals?.slice((localPage - 1) * PER_PAGE, localPage * PER_PAGE) || [];

  const handlePageChange = (_, value) => {
    if (isFilterMode) {
      onFilterPageChange(value);
    } else {
      setLocalPage(value);
      window.scrollTo({ top: 1900, behavior: "smooth" });
    }
  };

  if (noResults) {
    return (
      <Box
        id="recipes"
        sx={{ mt: { lg: "110px", xs: "50px" }, p: "20px", textAlign: "center" }}
      >
        <Typography variant="h5" sx={{ color: "#888" }}>
          No recipes found. Try a different cuisine or search term.
        </Typography>
      </Box>
    );
  }

  if (!meals?.length) return <Box id="recipes" />;

  return (
    <Box id="recipes" sx={{ mt: { lg: "110px", xs: "50px" }, p: "20px" }}>
      <Typography variant="h3" sx={{ mb: "46px" }}>
        Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {displayMeals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </Stack>
      {totalCount > PER_PAGE && (
        <Pagination
          color="standard"
          shape="rounded"
          page={currentPage}
          count={Math.ceil(totalCount / PER_PAGE)}
          onChange={handlePageChange}
          size="large"
          sx={{ mt: "24px", display: "flex", justifyContent: "center" }}
        />
      )}
    </Box>
  );
};

export default Recipes;
