import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const CUISINES = [
  "American",
  "British",
  "Chinese",
  "French",
  "Greek",
  "Indian",
  "Italian",
  "Japanese",
  "Mexican",
  "Spanish",
  "Thai",
];

const flagUrl = (name) =>
  `${import.meta.env.BASE_URL}flags/${name.toLowerCase()}.png`;

const SearchRecipes = ({
  onSearch,
  setSelectedArea,
  selectedArea,
  onSelectArea,
  error,
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      setSelectedArea("");
      onSearch(search.trim());
      setSearch("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        mt: "37px",
        justifyContent: "center",
        p: "20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { lg: "44px", xs: "30px" },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Search for recipes
      </Typography>
      <Box
        sx={{
          position: "relative",
          mb: "36px",
          width: { lg: "800px", xs: "350px" },
        }}
      >
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="77px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyDown={handleKeyDown}
          placeholder="Search recipes"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#0A6847",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
            "&:hover": {
              bgcolor: "white",
              color: "#0A6847",
              border: "1px solid #0A6847",
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* Cuisine chips */}
      <Box
        sx={{
          width: { lg: "800px", xs: "350px" },
          overflowX: "auto",
          pb: "8px",
        }}
      >
        <Stack
          direction="row"
          sx={{ gap: "8px", flexWrap: "nowrap", display: "inline-flex" }}
        >
          {CUISINES.map((cuisine) => (
            <Chip
              key={cuisine}
              label={cuisine}
              avatar={
                <Avatar
                  src={flagUrl(cuisine)}
                  alt={cuisine}
                  sx={{ width: 24, height: 24 }}
                />
              }
              onClick={() =>
                onSelectArea(cuisine === selectedArea ? "" : cuisine)
              }
              sx={{
                flexShrink: 0,
                backgroundColor: selectedArea === cuisine ? "#0A6847" : "#fff",
                color: selectedArea === cuisine ? "#fff" : "#333",
                border: "1px solid",
                borderColor: selectedArea === cuisine ? "#0A6847" : "#ccc",
                fontFamily: "inherit",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor:
                    selectedArea === cuisine ? "#085438" : "#f0f0f0",
                },
              }}
            />
          ))}
        </Stack>
      </Box>

      {error && (
        <Typography sx={{ color: "error.main", mt: 2 }}>{error}</Typography>
      )}
    </Stack>
  );
};

export default SearchRecipes;
