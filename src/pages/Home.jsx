import React, { useState } from "react";
import { Box } from "@mui/material";
import { fetchData, BASE_URL } from "../utils/fetchData";
import HeroBanner from "../components/HeroBanner";
import SearchRecipes from "../components/SearchRecipes";
import Recipes from "../components/Recipes";

const AREA_MAP = {
  Indian: "India",
  French: "France",
  American: "United States",
};

const PER_PAGE = 10;

const fetchFullDetails = (ids) =>
  Promise.all(
    ids.map((m) =>
      fetchData(`${BASE_URL}/lookup.php?i=${m.idMeal}`).then(
        (r) => r.meals?.[0] ?? null,
      ),
    ),
  ).then((results) => results.filter(Boolean));

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [filterIds, setFilterIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noResults, setNoResults] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const handleSearch = async (term) => {
    setFilterIds([]);
    setCurrentPage(1);
    setNoResults(false);
    setSearchError("");
    try {
      // Run name search and category filter in parallel
      const [nameData, catData] = await Promise.all([
        fetchData(`${BASE_URL}/search.php?s=${encodeURIComponent(term)}`),
        fetchData(
          `${BASE_URL}/filter.php?c=${encodeURIComponent(capitalize(term))}`,
        ),
      ]);

      const nameResults = nameData.meals || [];

      // Fetch full details for category results (up to 20) to get strCategory
      let catResults = [];
      if (catData.meals) {
        catResults = await fetchFullDetails(catData.meals.slice(0, 20));
      }

      // Combine, putting name results first, then non-duplicate category results
      const seen = new Set(nameResults.map((m) => m.idMeal));
      const combined = [
        ...nameResults,
        ...catResults.filter((m) => !seen.has(m.idMeal)),
      ];

      if (combined.length > 0) {
        setMeals(combined);
      } else {
        setMeals([]);
        setNoResults(true);
        setSearchError("No recipes found");
      }
    } catch (err) {
      console.error(err);
      setSearchError("Error fetching recipes. Please try again.");
    }
  };

  const handleSelectArea = async (area) => {
    setSelectedArea(area);
    setNoResults(false);
    setSearchError("");
    setFilterIds([]);
    setCurrentPage(1);
    if (!area) {
      setMeals([]);
      return;
    }
    try {
      const filterArea = AREA_MAP[area] || area;
      const data = await fetchData(
        `${BASE_URL}/filter.php?a=${encodeURIComponent(filterArea)}`,
      );
      if (!data.meals) {
        setMeals([]);
        setNoResults(true);
        return;
      }
      setFilterIds(data.meals);
      const firstPage = await fetchFullDetails(data.meals.slice(0, PER_PAGE));
      setMeals(firstPage);
    } catch (err) {
      console.error(err);
      setNoResults(true);
    }
  };

  const handleFilterPageChange = async (page) => {
    setCurrentPage(page);
    const start = (page - 1) * PER_PAGE;
    const pageMeals = await fetchFullDetails(
      filterIds.slice(start, start + PER_PAGE),
    );
    setMeals(pageMeals);
    window.scrollTo({ top: 1900, behavior: "smooth" });
  };

  return (
    <Box>
      <HeroBanner />
      <SearchRecipes
        onSearch={handleSearch}
        setSelectedArea={setSelectedArea}
        selectedArea={selectedArea}
        onSelectArea={handleSelectArea}
        error={searchError}
      />
      <Recipes
        meals={meals}
        noResults={noResults}
        filterTotal={filterIds.length}
        currentPage={currentPage}
        onFilterPageChange={handleFilterPageChange}
      />
    </Box>
  );
};

export default Home;
