import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, BASE_URL } from "../utils/fetchData";
import Detail from "../components/Detail";

const RecipeDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchData(`${BASE_URL}/lookup.php?i=${id}`)
      .then((data) => setMeal(data.meals?.[0] ?? null))
      .catch(console.error);
  }, [id]);

  return (
    <Box>
      <Detail meal={meal} />
    </Box>
  );
};

export default RecipeDetail;
